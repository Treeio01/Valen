import DashboardLayout from "@/Layouts/DashboardLayout";
import Banner from "@/Components/Dashboard/Banner";
import { Head } from "@inertiajs/react";
import Guide from "@/Components/Dashboard/Guide.jsx";
import TopDevs from "@/Components/Dashboard/TopDevs.jsx";
import LastReports from "@/Components/Dashboard/LastReports.jsx";
import { usePage } from "@inertiajs/react";
export default function Dashboard() {
    const { props } = usePage();
    console.log(props)
    const reports = props.reports ?? [];

    return (
        <DashboardLayout>
            <Head title="Dashboard" />

            <Guide reports={props.reportsUserCount}></Guide>

            <Banner></Banner>
            <TopDevs></TopDevs>
            <LastReports reports={reports}></LastReports>
        </DashboardLayout>
    );
}
