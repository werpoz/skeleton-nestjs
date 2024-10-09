# Zerveros Nest Skeleton

docker compose -f '.docker/docker-compose.dev.yml' run --rm node-cli node --version

docker compose -f ".docker/docker-compose.dev.yml" up -d --build node-cli
docker compose -f ".docker/docker-compose.dev.yml" up -d --build node-server-debug

## run prettier

docker compose -f '.docker/docker-compose.dev.yml' run --rm node-cli npx prettier . --single-quote --list-different

## run git

docker compose -f '.docker/docker-compose.dev.yml' run --rm node-cli git status