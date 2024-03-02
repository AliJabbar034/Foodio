package utils

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

type errorJson struct {
	Message string `json:"message"`
	Status  int    `json:"status"`
}

func ErrorHandler(c *gin.Context, statusCode int, message error) {

	error := &errorJson{
		Message: message.Error(),
		Status:  statusCode,
	}

	fmt.Println(message, statusCode)
	c.JSON(statusCode, error)
	c.Abort()

}
