FROM python:3.5

WORKDIR ./datalayer
ADD ./datalayer ./

ADD ./requirements-* ./

RUN pip install --upgrade pip
RUN pip install -r requirements-dev.txt
