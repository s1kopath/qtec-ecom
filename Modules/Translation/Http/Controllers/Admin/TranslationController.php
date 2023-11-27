<?php

namespace Modules\Translation\Http\Controllers\Admin;

use Illuminate\Http\Response;
use Modules\Translation\Entities\Translation;

class TranslationController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $translations = Translation::retrieve();

        return view('translation::admin.translations.index', compact('translations'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param string $key
     *
     * @return Response
     */
    public function update($key)
    {
        Translation::firstOrCreate(['key' => $key])
            ->translations()
            ->updateOrCreate(
                ['locale' => request('locale')],
                ['value' => request('value', '')]
            );

        return trans('admin::messages.resource_updated', ['resource' => trans('translation::translations.translation')]);
    }
}
