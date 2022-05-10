package com.patdem.authorization.repository

import org.springframework.stereotype.Repository

@Repository
class AuthorizationRepository {
    private val authorizedUsersMap = mapOf("admin" to "adminadmin", "login" to "password")

    fun userIsAuthorized(login: String, password: String): Boolean {
        if (authorizedUsersMap.containsKey(login)) {
            return authorizedUsersMap[login] == password
        }
        return false
    }
}