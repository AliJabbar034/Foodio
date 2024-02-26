package utils

import (
	"errors"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/alijabbbar034/foodApp/models"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

func SendToken(c *gin.Context, user models.User) {

	token, err := GenerateToken(user.ID)

	if err != nil {
		ErrorHandler(c, http.StatusInternalServerError, errors.New("Error generating token: "))
		return
	}
	c.SetCookie("token", token, int(time.Hour*24*60), "/", "localhost", false, true)
	c.JSON(http.StatusOK, gin.H{
		"token": token,
		"user":  user,
	})

}

func GenerateToken(id string) (string, error) {

	secretKey := os.Getenv("SECRET_KEY")
	token := jwt.New(jwt.SigningMethodES256)
	claims := token.Claims.(jwt.MapClaims)
	claims["id"] = id
	claims["exp"] = time.Now().Add(time.Hour * 24 * 60).Unix()

	tokenstr, err := token.SignedString([]byte(secretKey))
	if err != nil {
		fmt.Println(err.Error())
		return "", err
	}

	return tokenstr, nil

}
