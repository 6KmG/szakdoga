package com.example.demo.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Content;
import com.example.demo.Model.VideoModel;
import com.example.demo.Service.VideoService;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/v1/videos")
public class VideoController {

    private final VideoService videoService;

    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }

    @GetMapping("/stream/{fileType}/{filePathAndName}")
    public Mono<ResponseEntity<byte[]>> streamVideoByPath(@RequestHeader(value = "Range", required = false) String httpRangeList, @PathVariable("fileType") String fileType, @PathVariable("filePathAndName") String filePathAndName) {
        return Mono.just(videoService.prepareContentByFilePath(httpRangeList, filePathAndName, fileType));
    }

    @GetMapping("/stream/object-key/{objectKey}")
    public Mono<ResponseEntity<byte[]>> streamVideoByObjectKey(@RequestHeader(value = "Range", required = false) String httpRangeList, @PathVariable("objectKey") String objectKey) {
        return Mono.just(videoService.prepareContentByObjectKey(httpRangeList, objectKey));
    }

    @GetMapping("/{id}/metadata")
    public ResponseEntity<VideoModel> getVideoMetadata(@PathVariable Long id) {
        try {
            VideoModel video = videoService.getVideoById(id);
            return ResponseEntity.ok(video);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public Mono<ResponseEntity<List<Content>>> getAllContents() {

        return Mono.just(videoService.getAllContents());
    }
}
