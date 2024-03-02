package utils

import (
	"errors"

	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) (string, error) {

	pass, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", errors.New("Inetrnal server error")
	}
	return string(pass), nil

}

func ComaprePassword(old string, password string) error {

	err := bcrypt.CompareHashAndPassword([]byte(old), []byte(password))
	if err != nil {
		return errors.New("Invalid  password")
	}
	return nil
}
