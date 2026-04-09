param (
    [string]$ProjectName = "aihealth"
)

Write-Host "Creating Spring Boot backend structure for $ProjectName..." -ForegroundColor Green

$basePath = "$ProjectName"
$javaBase = "$basePath/src/main/java/com/$ProjectName"
$resources = "$basePath/src/main/resources"

# Create directories
New-Item -ItemType Directory -Force -Path $javaBase
New-Item -ItemType Directory -Force -Path $resources

$folders = @(
    "config",
    "controller",
    "dto",
    "mapper",
    "model",
    "repo",
    "service",
    "scheduler",
    "exception",
    "util"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path "$javaBase/$folder"
}

# Create Application.java
$appFile = "$javaBase/Application.java"
@"
package com.$ProjectName;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
"@ | Set-Content $appFile

# Create application.properties
$propFile = "$resources/application.properties"
@"
server.port=8080

spring.application.name=$ProjectName

spring.datasource.url=jdbc:h2:file:./data/$ProjectName-db
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
"@ | Set-Content $propFile

# Create basic DTOs
$dtoPath = "$javaBase/dto"

@"
package com.$ProjectName.dto;

public class SymptomRequest {
    private String symptom;

    public String getSymptom() { return symptom; }
    public void setSymptom(String symptom) { this.symptom = symptom; }
}
"@ | Set-Content "$dtoPath/SymptomRequest.java"

@"
package com.$ProjectName.dto;

public class SymptomResponse {
    private String cause;
    private String advice;

    public SymptomResponse(String cause, String advice) {
        this.cause = cause;
        this.advice = advice;
    }

    public String getCause() { return cause; }
    public String getAdvice() { return advice; }
}
"@ | Set-Content "$dtoPath/SymptomResponse.java"

Write-Host "Backend structure created successfully ✅" -ForegroundColor Cyan