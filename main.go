package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/alijabbbar034/foodApp/database"
	"github.com/joho/godotenv"
)

const add = "8000"

type Config struct{}

func main() {

	if err := godotenv.Load(); err != nil {
		fmt.Println("eror loadin env file")
		panic(err)
	}
	port := os.Getenv("PORT")
	db := database.ConnectDB()
	srv := Config{}
	serv := http.Server{
		Addr:    fmt.Sprintf(":%s", port),
		Handler: srv.routes(db),
	}

	if err := serv.ListenAndServe(); err != nil {
		fmt.Println("Error", err.Error())
		panic(err)
	}

	fmt.Println("Starting server.....")

}
