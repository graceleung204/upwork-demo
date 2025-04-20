import ProjectList from "@/components/ProjectList";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <ProjectList />
    </div>
  );
}