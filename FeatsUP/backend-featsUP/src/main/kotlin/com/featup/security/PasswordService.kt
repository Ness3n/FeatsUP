package com.featup.security

import at.favre.lib.crypto.bcrypt.BCrypt

object PasswordService {

  fun hash(password: String): String {
    return BCrypt.withDefaults().hashToString(12, password.toCharArray())
  }

  fun verify(password: String, hashed: String): Boolean {
    val result = BCrypt.verifyer().verify(password.toCharArray(), hashed)
    return result.verified
  }
}
