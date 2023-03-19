package com.example.cinemaapp.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Objects;


@Entity
@Getter
@Setter
public class Movie {
    @Id
    @SequenceGenerator(name="yourSequenceGenerator", allocationSize=1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="yourSequenceGenerator")
    private Integer movieId;
    @Column(length = 1333, nullable = false, unique = true)
    private String movieName;
    @Column( length = 500, nullable = false)
    private String movie_description;
    @Column(length = 500, nullable = false)
    private String movie_image_link;

    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate movieDate;

    @JsonIgnore
    @OneToOne
    private Show show;


    public Movie(){}

    public Movie(Integer movieId, String movieName, String movie_description, String movie_image_link, LocalDate movieDate, Show show) {
        this.movieId = movieId;
        this.movieName = movieName;
        this.movie_description = movie_description;
        this.movie_image_link = movie_image_link;
        this.movieDate = movieDate;
        this.show = show;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

    public Integer getMovieId() {
        return movieId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Movie movie = (Movie) o;
        return  movieName.equals(movie.movieName) &&
                movie_description.equals(movie.movie_description) &&
                movie_image_link.equals(movie.movie_image_link);
    }

    @Override
    public int hashCode() {
        return Objects.hash(movieName, movie_description, movie_image_link);
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + movieId + '\'' +
                ", name='" + movieName + '\'' +
                ", description='" + movie_description + '\'' +
                ", imageLink=" + movie_image_link +
                '}';
    }
}
