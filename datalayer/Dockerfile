FROM python:3.5
RUN mkdir ./code
WORKDIR ./code
ADD ./code ./

ADD ./requirements-* ./

RUN pip install --upgrade pip
RUN pip install -r requirements-dev.txt
