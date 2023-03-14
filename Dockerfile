# By Meer Sawood <msawood@redhat.com> 
# uses ubi minimal image to build and httpd as the server

# Use an official Red Hat UBI minimal runtime as a parent image
FROM registry.access.redhat.com/ubi8/nodejs-16-minimal:1-98

# Set the working directory to /app
WORKDIR /app
USER root

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
#RUN microdnf module enable nodejs:14
#RUN microdnf install nodejs
#RUN npm cache verify
RUN npm install 
RUN npm run build
RUN npm install -g pm2

# Expose the server on port 80
EXPOSE 3000

# Start Server
#CMD ["pm2-runtime", "npm", "--", "start"]
#ENTRYPOINT [ "nginx" ]

ENTRYPOINT [ "/app/hack/entrypoint.sh" ]
CMD [ "sh" ]

