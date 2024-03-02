package main

import (
	"net/http"
	"time"

	"github.com/alijabbbar034/foodApp/api/handler"
	"github.com/alijabbbar034/foodApp/api/storer"
	"github.com/alijabbbar034/foodApp/middleware"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func (app *Config) routes(db *mongo.Database) http.Handler {

	mux := gin.Default()

	mux.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello World!",
		})
	})

	api := mux.Group("/api")

	mux.Use(cors.New(
		cors.Config{
			AllowOrigins:     []string{"http://localhost:5173"},
			AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "PATCH"},
			AllowHeaders:     []string{"Content-Type", "Authorization"},
			ExposeHeaders:    []string{"Content-Length", "Access-Control-Allow-Origin"},
			AllowCredentials: true,
			MaxAge:           12 * time.Hour,
		},
	))

	api.Use(cors.New(
		cors.Config{
			AllowOrigins:     []string{"http://localhost:5173"},
			AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "PATCH"},
			AllowHeaders:     []string{"Content-Type", "Authorization"},
			ExposeHeaders:    []string{"Content-Length", "Access-Control-Allow-Origin"},
			AllowCredentials: true,
			MaxAge:           12 * time.Hour,
		},
	))

	auth := middleware.NewAuth_Handsler(storer.NewAuth_Mongor(db))
	{
		//User Handler
		userHandler := handler.NewUserHandler(storer.NewUserMongo(db))
		userRouter := api.Group("/user")
		{
			userRouter.POST("/register", userHandler.Register_User_Handler)
			userRouter.POST("/login", userHandler.Login_User_Handler)
			userRouter.GET("/:id", userHandler.Get_User_Handler)
			userRouter.PUT("/:id", userHandler.Update_User_Handler)
			userRouter.GET("/me", auth.Authenticat, userHandler.Get_User_Profile)
			userRouter.DELETE("/:id", userHandler.Delete_User_Handler)
			userRouter.GET("/logout", userHandler.Logout_User_Handler)
		}

		//Menu Handler

		menuHandler := handler.New_Menu_Handler(storer.NewMenu_storer(db))
		menuRouter := api.Group("/menu")
		{
			menuRouter.POST("/", auth.Authenticat, menuHandler.CreateMenuHandler)
			menuRouter.GET("/", menuHandler.GetAllMenuItem_Handler)
			menuRouter.GET("/:id", menuHandler.GetMenuById_Handler)
			menuRouter.PUT("/:id", menuHandler.UpdateMenu_Handler)
			menuRouter.DELETE("/:id", menuHandler.DeleteMenu_Handler)

		}

		//Order Handler

		orderHandler := handler.New_Orderhandler(storer.New_Order_MOngo(db))
		orderRouter := api.Group("/order")
		{
			orderRouter.POST("/", orderHandler.CreateOrderHandler)
			orderRouter.GET("/:id", orderHandler.GetOrderHandler)
			orderRouter.GET("/cancel/:id", orderHandler.CancelOrderHandler)
		}

		// Rservation Handler

		reservationHandler := handler.New_Reservation(storer.New_Reservation_Mongo(db))
		reservationRouter := api.Group("/reservation")
		{
			reservationRouter.POST("/", reservationHandler.CreateRes_Handler)
			reservationRouter.GET("/cancel/:id", reservationHandler.CancelRes_Handler)
		}
	}

	return mux
}
