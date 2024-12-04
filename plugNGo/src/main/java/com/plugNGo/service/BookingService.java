package com.plugNGo.service;

import com.plugNGo.dto.*;
import com.plugNGo.models.BookingEntity;
import com.plugNGo.models.ChargingStationEntity;
import com.plugNGo.repository.BookingRepo;
import com.plugNGo.repository.BookingViewRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    @Autowired
    private BookingViewRepo bookingVoRepo;

    private static final Double BOOKING_AMOUNT = 250d;

    @Autowired
    private StationService stationService;

    @Autowired
    private UserCredentialsService userCredentialsService;

    @Autowired
    private JavaMailSender mailSender;
    private final ModelMapper mapper = new ModelMapper();

    public void saveBooking(BookingDetails bookingDetails){
        ChargingStationDTO station = stationService.findById(bookingDetails.getStationId());
        UserCredentials user = userCredentialsService.findById(bookingDetails.getUserId());
        station.setSlotsAvailable(station.getSlotsAvailable() - 1);
        stationService.save(station);
        BookingDto bookingDto = new BookingDto();
        bookingDto.setTransactionId(generateRandom10DigitNumber());
        bookingDto.setAmount(BOOKING_AMOUNT);
        bookingDto.setBookingDate(LocalDate.now());
        //Setting station inside bookingDto because of mapping.
        bookingDto.setChargingStationDTO(station);
        //Setting user inside bookingDto because of mapping.
        bookingDto.setUserCredentials(user);
        bookingDto.setDateTime(bookingDetails.getDateTime());


        ChargingStationEntity stationEntity = mapper.map(station, ChargingStationEntity.class);
        BookingEntity booking = mapper.map(bookingDto, BookingEntity.class);
        booking.setChargingStationEntity(stationEntity);

        bookingRepo.save(booking);
        sendEmail(bookingDto);
    }

    public List<BookingVO> findByUser(Long id){
        return bookingVoRepo.findAll().stream()
                .filter(bookingVOEntity -> Objects.equals(bookingVOEntity.getUserId(), id))
                .map(entity -> mapper.map(entity, BookingVO.class))
                .collect(Collectors.toList());
    }

    public List<BookingDto> findAll(){
        return bookingRepo.findAll().stream()
                .map(entity -> mapper.map(entity, BookingDto.class)).collect(Collectors.toList());
    }

    public Double findCurrentEarnings(){
        return bookingRepo.findAll().stream()
                .filter(entity -> Objects.equals(entity.getBookingDate(), LocalDate.now()))
                .mapToDouble(BookingEntity::getAmount)
                .sum();
    }

    public List<BookingDto> findCurrentBookings(){
        return bookingRepo.findAll().stream()
                .filter(entity -> Objects.equals(entity.getBookingDate(), LocalDate.now()))
                .map(entity -> mapper.map(entity, BookingDto.class))
                .collect(Collectors.toList());
    }

    public static long generateRandom10DigitNumber() {
        return ThreadLocalRandom.current().nextLong(1000000000L, 10000000000L);
    }

    public void sendEmail(BookingDto dto){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("vishal890@gmail.com");
        message.setTo(dto.getUserCredentials().getUsername());
        message.setSubject("Booking Confirmed");

        String content = "Dear Customer.\n" +
                "Your Booking has been confirmed.\n" +
                "Transaction Id: " + dto.getTransactionId() + "\n" +
                "Amount Paid: " + dto.getAmount() + "\n" +
                "Date and Time: " + dto.getDateTime() + "\n";

        message.setText(content);
        mailSender.send(message);
    }
}
