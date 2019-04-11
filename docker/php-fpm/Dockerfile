FROM php:7.3-fpm-alpine
ARG isProduction
WORKDIR "/application"

# Copy production / development config 
RUN if [ "${isProduction}" = "true" ] ; then mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini" ; else mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini" ; fi

# Install selected extensions and other stuff
RUN apk update && apk upgrade \
        && apk add php7-memcached \
		&& docker-php-ext-install mysqli

# Install xdebug on development environments
RUN if [ "${isProduction}" = "false" ] ; then apk add php7-xdebug ; fi