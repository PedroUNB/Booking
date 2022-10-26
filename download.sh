#!/bin/bash

LOC=$PWD

docker run -v ${LOC}/data:/var/lib/postgresql/data --name postgres-booking -e POSTGRES_PASSWORD=1234 -e POSTGRES_USER=postgres -p 5432:5432 -d postgres:latest
# docker run --name redis-curia -e REDIS_PASSWORD=1234  -p 6379:6379 -d bitnami/redis:latest
# docker run -d -p 8090:15672 -p 5672:5672 -p 25676:25676 --hostname localhost --name rabbitmq-curia --expose=5672 rabbitmq:3-management
