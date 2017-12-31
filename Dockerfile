# Pull base image
FROM node:latest

# Install dependencies
RUN apt-get update && apt-get install -y \
    git-core \
    build-essential \
    gcc \
    python \
    python-dev \
    python-pip \
    python-virtualenv \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/* \
RUN pip install pyserial
# RUN git clone git://git.drogon.net/wiringPi
# RUN cd wiringPi && ./build
RUN pip install wiringpi2
RUN npm install express
RUN npm install --save-dev nodemon
RUN npm install jsonwebtoken

# Define working directory
WORKDIR /data
VOLUME /data:/


# Define default command
CMD ["bash"]