# garage-pi
```bash
docker build -t <YOUR_IMAGE_HERE> .
```

#### Run the Image in HypriotOS with Docker (interactively)
Replace YOUR_IMAGE_HERE with image name (acencini/rpi-python-serial-wiringpi if getting from DockerHub) that you created.

```
docker run --device /dev/mem:/dev/mem --device /dev/ttyAMA0:/dev/ttyAMA0 --privileged -ti YOUR_IMAGE_HERE /bin/bash
```