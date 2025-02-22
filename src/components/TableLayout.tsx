"use client";

// ReactJS
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

// Flowbite
import { Pagination, Spinner, Table } from "flowbite-react";

// Components
import { TextSpan } from "./Typographies";

// Types
type Selection = Set<string> | "all" | undefined;

export default function TableLayout(props: ITableLayoutProps) {
    // Props
    const {
        children,
        emptyContent,
        isLoading,
        onSelectionChange,
        selectedKeys,
        selectionMode = "single",
        setTablePage,
        setTableRowsPerPage,
        tablePage = 1,
        tableRowsPerPage = 10,
        tHeaders,
        topContent = null,
        totalData = 0,
        totalPages = 1,
    } = props;

    // Translation
    const { t } = useTranslation();

    // Functions
    const handlePageChange = useCallback((page: number) => {
        setTablePage?.(page);
    }, [setTablePage]);

    const handleRowsPerPageChange = useCallback((rowsPerPage: number) => {
        setTableRowsPerPage?.(rowsPerPage);
    }, [setTableRowsPerPage]);

    // Components
    const bottomTableContent = useMemo(() => {
        return (
            <footer className="py-2 px-2 flex justify-between items-center">
                <Pagination
                    currentPage={tablePage}
                    onPageChange={handlePageChange}
                    showIcons={true}
                    totalPages={totalPages}
                />

                <TextSpan className="text-sm text-gray-500">
                    {tablePage} - {totalPages} {t("Constants.Of")} {tableRowsPerPage}
                </TextSpan>
            </footer>
        );
    }, [handlePageChange, tablePage, totalPages, tableRowsPerPage, t]);

    const topTableContent = useMemo(() => {
        return (
            <header className="flex flex-col gap-4">
                {topContent}

                <section className="flex justify-between items-center">
                    <TextSpan className="text-sm text-gray-500">
                        {t("Constants.Total")} {totalData}
                    </TextSpan>

                    <label className="flex items-center text-sm text-gray-500">
                        {t("Constants.RowsPerPage")}

                        <select
                            className="bg-transparent outline-none text-sm text-gray-500 ml-2"
                            onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
                        >
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="25">25</option>
                        </select>
                    </label>
                </section>
            </header>
        );
    }, [handleRowsPerPageChange, topContent, totalData, t]);

    return (
        <div className="w-full">
            {topTableContent}
            
            <div className="max-h-[750px] overflow-auto relative">
                <Table hoverable>
                    <Table.Head className="sticky top-0 bg-white">
                        {tHeaders.map((header: string, index: number) => (
                            <Table.HeadCell 
                                key={index} 
                                className={index !== 0 ? "text-center" : ""}
                            >
                                {t(header)?.toUpperCase()}
                            </Table.HeadCell>
                        ))}
                    </Table.Head>

                    <Table.Body className="divide-y">
                        {isLoading ? (
                            <Table.Row>
                                <Table.Cell colSpan={tHeaders.length} className="text-center">
                                    <div className="flex justify-center items-center p-4">
                                        <Spinner size="xl" />
                                        <span className="ml-2">{t("Constants.Loading")}</span>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ) : children ? (
                            children
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={tHeaders.length} className="text-center">
                                    {emptyContent ?? t("Constants.NoDataFound")}
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </div>

            {bottomTableContent}
        </div>
    );
}