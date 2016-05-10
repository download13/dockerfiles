FROM download13/alpine-tls

WORKDIR /data
RUN apk-install postgresql && \
	chown postgres:postgres /data
USER postgres
RUN initdb -D /data

CMD ["postgres", "-D", "/data", "-c", "listen_addresses=*"]
