package com.aihealth.healthapp.dto;

public class SymptomResponse {
    private String cause;
    private String advice;

    public SymptomResponse(String cause, String advice) {
        this.cause = cause;
        this.advice = advice;
    }

    public String getCause(){
        return this.cause;
    }

    public void setCause(String cause){
        this.cause=cause;
    }

    public String getAdvice(){
        return this.advice;
    }

    public void setAdvice(String advice){
        this.advice=advice;
    }
}
