FROM python
COPY ./requirements.txt /server/requirements.txt
COPY . /server
RUN pip install --no-cache-dir --upgrade -r /server/requirements.txt
WORKDIR /server
CMD ["uvicorn","main:app","--host","0.0.0.0", "--port","80"]