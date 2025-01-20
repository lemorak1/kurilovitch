"use client";

import React from "react";

interface Course {
    title: string;
    description: string;
    buttonLabel: string;
    onButtonClick: () => void;

}

interface FeaturedCoursesProps {
    courses: Course[];
    backgroundColor?: string;
    backgroundColorSecond?: string;
    textColor?: string;
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({
    courses,
    backgroundColor = "gray",
    backgroundColorSecond = "white",
    textColor = "black",
}) => {
    return (
        <section className=" text-gray-800"
        style={{
            backgroundColor: backgroundColor, // Fondo en hexadecimal
            color: textColor, // Color de fuente en hexadecimal
        }}
        >
            <div className="container mx-auto px-6 text-center"
               
            >
                <h2 className="text-4xl font-bold mb-8">Cursos Destacados</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-100 rounded-lg shadow-md"
                            style={{
                                backgroundColor: backgroundColorSecond, // Fondo en hexadecimal
                                color: textColor, // Color de fuente en hexadecimal
                            }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>
                            <p>{course.description}</p>
                            <button
                                onClick={course.onButtonClick}
                                className="mt-4 px-4 py-2 text-white font-bold rounded-lg hover:bg-yellow-600"
                                style={{
                                    backgroundColor: backgroundColor, // Fondo en hexadecimal
                                    color: textColor, // Color de fuente en hexadecimal
                                }}

                            >
                                {course.buttonLabel}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;
