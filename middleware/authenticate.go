package middleware

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/alijabbbar034/foodApp/api/storer"
	"github.com/alijabbbar034/foodApp/utils"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

type Auth_Handsler struct {
	auth storer.Auth_Storer
}

func NewAuth_Handsler(auth storer.Auth_Storer) *Auth_Handsler {
	return &Auth_Handsler{auth: auth}
}

func (a *Auth_Handsler) Authenticat(c *gin.Context) {
	fmt.Println("MIDDLEWARE Call Authentication")
	secretKey := os.Getenv("SECRET_KEY")
	tokenStr, err := c.Cookie("token")
	log.Println("token", tokenStr)
	if err != nil {
		log.Println("token", err.Error())
		utils.ErrorHandler(c, http.StatusUnauthorized, errors.New("Unauthorize access"))

		c.AbortWithStatus(http.StatusUnauthorized)
		return

	}

	token, err := jwt.Parse(tokenStr, func(t *jwt.Token) (interface{}, error) {
		return []byte(secretKey), nil
	})

	if err != nil {
		log.Println("error parsing token", err.Error())
		utils.ErrorHandler(c, http.StatusUnauthorized, errors.New("Unauthorized access"))
		c.Abort()
		return
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		log.Println("claims is not a map")
		utils.ErrorHandler(c, http.StatusUnauthorized, errors.New("Unauthorized access"))
		c.Abort()
		return
	}
	id := claims["id"].(string)
	log.Println("id", id)
	if id == "" {
		log.Println("id is empty")

		utils.ErrorHandler(c, http.StatusUnauthorized, errors.New("Unauthorized access"))
		c.Abort()

		return
	}

	user, err := a.auth.GetUserById(id)
	if err != nil {
		log.Println("Error getting user")
		utils.ErrorHandler(c, http.StatusUnauthorized, errors.New("Unauthorized access"))
		c.Abort()
		return
	}
	c.Set("user", user)
	c.Next()
}
