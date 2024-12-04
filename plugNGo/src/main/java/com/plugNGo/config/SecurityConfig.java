package com.plugNGo.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final UserAuthenticationEntryPoint userAuthenticationEntryPoint;
    private final UserAuthenticationProvider userAuthenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .exceptionHandling().authenticationEntryPoint(userAuthenticationEntryPoint)
                .and()
                .addFilterBefore(new JwtAuthFilter(userAuthenticationProvider), BasicAuthenticationFilter.class)
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers(HttpMethod.POST, "/login", "/register","/booking/save","/stations/saveAll","/stations/save ").permitAll()
                        .requestMatchers(HttpMethod.GET, "/booking/findAll","/stations/findAll").permitAll()
                        .anyRequest().authenticated())
        ;
        return http.build();
//        http
//                .authorizeHttpRequests()
//                .requestMatchers(HttpMethod.POST, "/login", "/register","/booking/save","/stations/saveAll","/stations/save ").permitAll()
//                .requestMatchers(HttpMethod.GET, "/booking/findAll","/stations/findAll").permitAll() // Allow public access
//                .anyRequest().authenticated() // All other requests require authentication
//                .and()
//                .formLogin()
//                .loginPage("/login") // Specify your login page URL
//                .permitAll()
//                .and()
//                .logout()
//                .permitAll();
//        return http.build();
//        http.authorizeHttpRequests()
//                .requestMatchers(requestMatchers().antMatchers("/admin/**")).hasRole("ADMIN")
//                .requestMatchers(requestMatchers().antMatchers("/user/**")).hasRole("USER")
//                .anyRequest().authenticated();
    }

//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//        auth
//                .inMemoryAuthentication()
//                .withUser("username").password("{noop}password").roles("USER");
//    }
}
