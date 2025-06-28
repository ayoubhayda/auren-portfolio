import { Activity, Award, Users, Zap } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const ProjectKeyFeatures = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold">Key Features</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: Users,
            title: "User Experience",
            desc: "Intuitive and responsive design optimized for all devices",
            highlight: "Mobile-First",
          },
          {
            icon: Zap,
            title: "Performance",
            desc: "Optimized for speed with lazy loading and efficient caching",
            highlight: "98% Score",
          },
          {
            icon: Activity,
            title: "Real-time Updates",
            desc: "Live data synchronization with WebSocket integration",
            highlight: "Live Data",
          },
          {
            icon: Award,
            title: "Best Practices",
            desc: "Modern development standards with comprehensive testing",
            highlight: "100% Coverage",
          },
        ].map((feature, i) => (
          <Card
            key={i}
            className="p-6 shadow-none hover:shadow-md transition-shadow group gap-0 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <Badge variant="secondary" className="text-xs">
                {feature.highlight}
              </Badge>
            </div>
            <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectKeyFeatures;
