<?php

namespace Modules\Setting\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Artisan;
use Modules\Admin\Ui\Facades\TabManager;
use Modules\Setting\Http\Requests\UpdateSettingRequest;

class SettingController
{
    /**
     * Show the form for editing the specified resource.
     *
     * @return Response
     */
    public function edit()
    {
        $settings = setting()->all();
        $tabs = TabManager::get('settings');

        return view('setting::admin.settings.edit', compact('settings', 'tabs'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function update(UpdateSettingRequest $request)
    {
        $this->handleMaintenanceMode($request);

        setting($request->except('_token', '_method'));

        return redirect(non_localized_url())
            ->with('success', trans('setting::messages.settings_updated'));
    }


    private function handleMaintenanceMode($request)
    {
        if ($request->maintenance_mode) {
            Artisan::call('down');
        } else if (app()->isDownForMaintenance()) {
            Artisan::call('up');
        }
    }
}
