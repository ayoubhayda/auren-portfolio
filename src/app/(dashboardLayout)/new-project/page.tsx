import CreateProjectForm from "@/components/forms/CreateProjectForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { clientTestimonials, projectStats, technologies } from "@/constants";
import Image from "next/image";
import React from "react";

const page = async () => {
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-6 pb-8 lg:pb-12">
      {/* Create Project Form */}
      <CreateProjectForm />
      
      {/* This card will contain technology logos, testimonials, and stats */}
      <Card className="hidden lg:block col-span-1 h-fit shadow-none">
        <CardHeader>
          <CardTitle className="text-xl">Powered by Modern Tech</CardTitle>
          <CardDescription>
            Building innovative projects with cutting-edge technologies
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 mt-6">
          {/* Technology logos */}
          <div className="grid grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <Image
                key={tech.id}
                src={tech.logo}
                alt={tech.name}
                width={80}
                height={80}
                className="rounded-lg border border-muted-foreground/15 hover:border-muted-foreground/40 transition-all duration-200 ease-in-out"
              />
            ))}
          </div>
          
          {/* Client Testimonials */}
          <div className="space-y-4">
            {clientTestimonials.slice(0, 3).map((testimonial, index) => (
              <blockquote
                key={index}
                className="border-l-2 border-primary pl-4"
              >
                <p className="text-sm italic text-muted-foreground">
                  &quot;{testimonial.quote}&quot;
                </p>
                <footer className="mt-2 text-sm font-medium">
                  - {testimonial.author}, {testimonial.role}
                </footer>
              </blockquote>
            ))}
          </div>
          
          {/* Project Stats */}
          <div className="grid grid-cols-2 gap-4">
            {projectStats.map((stat, index) => (
              <div key={index} className="rounded-lg bg-muted p-4">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;