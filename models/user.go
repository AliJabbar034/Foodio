package models

import (
	"fmt"
	"regexp"
)

type User struct {
	ID       string `bson:"_id" json:"_id"`
	Name     string `bson:"name" json:"name"`
	Email    string `bson:"email" json:"email"`
	Password string `bson:"password" json:"-"`
}

func NewUser(user User, password string) *User {

	return &User{
		ID:       user.ID,
		Name:     user.Name,
		Email:    user.Email,
		Password: password,
	}

}

func ValidateUserData(user User) error {

	var emailRegexp = regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

	if user.Name == "" || !emailRegexp.MatchString(user.Email) || user.Password == "" {
		return fmt.Errorf("Invalid user data")
	}
	return nil

}
