import { EducationLink } from "./EducationLink"

export const EducationContainer = () => {
    return (
        <div className="mb-16 space-y-8">
            <h3 className="text-3xl mb-6">Education</h3>
            <EducationLink
                establishment="Universidad Nacional de Rio Negro"
                carrer="Ingenieria de Software"
                time="2017 - 2023"
                link="https://github.com/cuter97"
                type="university"
                tooltip="Ver carrera"
            />
            <h4 className="text-xl font-medium mb-2">Certifications</h4>
            <EducationLink
                establishment="Platzi"
                carrer="Frontend Developer"
                time="2022"
                link="https://github.com/cuter97"
                type="certification"
                tooltip="Ver curso"
            />
        </div>
    )
}
