FROM python:3.10-slim-bullseye

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Crear el directorio de trabajo
WORKDIR /usr/src/backend

# Instalar dependencias del sistema, incluyendo netcat
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    netcat \
    && rm -rf /var/lib/apt/lists/*

# Instalar dependencias de Python
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copiar el entrypoint y arreglar los finales de línea
COPY entrypoint.sh .
RUN sed -i 's/\r$//g' entrypoint.sh
RUN chmod +x entrypoint.sh

# Copiar el resto del proyecto
COPY . .

# Definir entrypoint
ENTRYPOINT ["./entrypoint.sh"]
