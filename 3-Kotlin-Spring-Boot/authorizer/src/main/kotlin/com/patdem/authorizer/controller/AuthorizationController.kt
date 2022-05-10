package com.patdem.authorization.controller

import com.patdem.authorization.model.AuthUser
import com.patdem.authorization.service.AuthorizationService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class AuthorizationController @Autowired constructor(private val authorizationService: AuthorizationService) {
    @PostMapping("/authorize")
    fun authorizeUser(@RequestBody authUser: AuthUser): ResponseEntity<String> {
        return if (authorizationService.authorizeUser(authUser.login, authUser.login)) {
            ResponseEntity("User is authorized!", HttpStatus.OK)
        } else {
            ResponseEntity("User is unauthorized!", HttpStatus.NOT_FOUND)
        }
    }
}