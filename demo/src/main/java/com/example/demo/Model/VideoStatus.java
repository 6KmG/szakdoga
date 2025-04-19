package com.example.demo.Model;

public enum VideoStatus {
    PROCESSING,  // Video is being processed after upload
    ACTIVE,      // Video is ready to be viewed
    DELETED      // Video has been deleted (soft delete)
}
