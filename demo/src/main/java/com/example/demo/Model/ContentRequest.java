package com.example.demo.Model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ContentRequest {

    private String fileType;
    private String fileName;
    private long rangeStart;
    private long rangeEnd;
    private String filePath;
}
