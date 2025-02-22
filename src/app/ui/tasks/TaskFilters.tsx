// ReactJS
import { useTranslation } from "react-i18next";

// Components
import { BtnSecondary } from "@components/Buttons";
import { Select, TextInput } from "flowbite-react";

// Icons
import { IconFilterOff } from "@tabler/icons-react";

type TTaskFiltersProps = {
    filters: TFilters;
    setFilters: (filters: TFilters) => void;
};

export default function TaskFilters({ filters, setFilters }: TTaskFiltersProps) {
    // Translations
    const { t } = useTranslation();

    // Functions
    const handleReset = () => {
        setFilters({
            title: "",
            status: "",
            dueDate: "",
            sortOrder: "asc"
        });
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 w-full">
                <TextInput
                    id="title"
                    type="text"
                    value={filters.title}
                    onChange={(e) => setFilters({ ...filters, title: e.target.value })}
                    placeholder={t("Tasks.Filters.Title")}
                    className="w-full"
                />

                <Select
                    id="status"
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                    className="w-full"
                >
                    <option value="">{t("Tasks.Filters.AllStatuses")}</option>
                    <option value="pending">{t("Tasks.Status.Pending")}</option>
                    <option value="completed">{t("Tasks.Status.Completed")}</option>
                </Select>

                <TextInput
                    id="dueDate"
                    type="date"
                    value={filters.dueDate}
                    onChange={(e) => setFilters({ ...filters, dueDate: e.target.value })}
                    placeholder={t("Tasks.Filters.DueDate")}
                    className="w-full"
                />

                <div className="flex gap-2 w-full">
                    <Select
                        id="sortOrder"
                        value={filters.sortOrder}
                        onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value as "asc" | "desc" })}
                        className="w-full"
                    >
                        <option value="asc">{t("Tasks.Filters.Ascending")}</option>
                        <option value="desc">{t("Tasks.Filters.Descending")}</option>
                    </Select>

                    <BtnSecondary
                        onClick={handleReset}
                        icon={IconFilterOff}
                        disabled={!filters.title && !filters.status && !filters.dueDate && filters.sortOrder === "asc"}
                    />
                </div>
            </div>
        </div>
    );
}