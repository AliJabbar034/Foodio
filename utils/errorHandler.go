package utils

import "github.com/gin-gonic/gin"

func ErrorHandler(c *gin.Context, statusCode int, message error) {

	c.JSON(statusCode, gin.H{
		"error": message,
	})
}
