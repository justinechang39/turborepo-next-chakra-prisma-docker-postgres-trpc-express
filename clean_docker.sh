#!/bin/bash


docker ps -a --filter name=database -q || true && docker stop $(docker ps -a --filter name=database -q) || true && docker rm $(docker ps -a --filter name=database -q) || true

