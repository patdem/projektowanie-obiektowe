package com.patdem.authorization.service

import com.patdem.authorization.repository.AuthorizationRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
object AuthorizationService {
    @Autowired
    private var authorizationRepository = AuthorizationRepository()

    fun authorizeUser(login: String, password: String): Boolean {
        return authorizationRepository.userIsAuthorized(login, password)
    }
}