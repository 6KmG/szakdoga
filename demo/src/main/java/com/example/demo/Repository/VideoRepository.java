package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Model.VideoModel;

@Repository
public interface VideoRepository extends JpaRepository<VideoModel, Long> {
}
