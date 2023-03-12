# By Meer Sawood <msawood@redhat.com> 
# uses ubi minimal image to build and httpd as the server

# Use an official Red Hat UBI minimal runtime as a parent image
FROM registry.access.redhat.com/ubi8/ubi-minimal

# Set the working directory to /app
WORKDIR /app
USER root

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN microdnf module enable nodejs:14
RUN microdnf install nodejs
RUN microdnf install nginx 

RUN npm install 
RUN npm run build
RUN npm install -g pm2

# Copy the default Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the server on port 80
EXPOSE 80 3000

# Start Server
#CMD ["pm2-runtime", "npm", "--", "start"]
#ENTRYPOINT [ "nginx" ]

ENTRYPOINT [ "/app/hack/entrypoint.sh" ]
CMD [ "sh" ]

