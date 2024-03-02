package models

import (
	"fmt"
	"regexp"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID        primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	FirstName string             `bson:"first_name" json:"first_name"`
	LastName  string             `bson:"last_name" json:"last_name"`
	Email     string             `bson:"email" json:"email"`
	Password  string             `bson:"password" json:"password"`
}

func NewUser(user User, password string) *User {

	return &User{
		ID:        user.ID,
		FirstName: user.FirstName,
		LastName:  user.LastName,

		Email:    user.Email,
		Password: password,
	}

}

func ValidateUserData(user User) error {

	var emailRegexp = regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

	if user.FirstName == "" || !emailRegexp.MatchString(user.Email) || user.Password == "" {
		return fmt.Errorf("Invalid user data")
	}
	return nil

}
