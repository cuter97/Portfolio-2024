import { Github, Linkedin, FileText } from "lucide-react";
import { ButtonType } from "../ui/Button-type";
import { useTranslations } from "next-intl";

export const ButtonsHeader = () => {
    const t = useTranslations('Header');
    return (
        <div className="grid grid-flow-col auto-cols-max gap-2 mb-6 ">
            <ButtonType type="email" name={t("btnHeader.btnEmail")} />
            <ButtonType type="link" name="GitHub" link={t("github")} Icon={<Github />} />
            <ButtonType type="link" name="Linkedin" link={t("linkedin")} Icon={<Linkedin />} />
            <ButtonType type="cv" name={t("btnHeader.btnCv")} Icon={<FileText />}/>
        </div>
    )
}
