<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReportsResource\Pages;
use App\Models\Report;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Filament\Tables;

class ReportsResource extends Resource
{
    protected static ?string $model = Report::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Admin';
    protected static ?int $navigationSort = 2;
    protected static ?string $modelLabel = 'Report';
    protected static ?string $pluralModelLabel = 'Reports';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Select::make('dev_id')
                ->label('Developer')
                ->relationship('developer', 'nickname') // использует метод developer() в модели Report
                ->searchable()->preload()->required(),
            Forms\Components\Select::make('user_id')
                ->label('User')
                ->relationship('user', 'email')
                ->searchable()->preload()->required(),

            Forms\Components\TextInput::make('ca')
                ->label('CA')->required()->maxLength(255),
            Forms\Components\TextInput::make('min_desc')
                ->label('Short description')->required()->maxLength(255),

            Forms\Components\Textarea::make('desc')
                ->label('Description')->rows(5)->columnSpanFull()->maxLength(65535),
        ])->columns(2);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('developer.nickname')->label('Developer')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('user.email')->label('User')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('ca')->searchable(),
                Tables\Columns\TextColumn::make('min_desc')->limit(50)->searchable(),
                Tables\Columns\TextColumn::make('created_at')->since()->label('Created'),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListReports::route('/'),
            'create' => Pages\CreateReports::route('/create'),
            'edit' => Pages\EditReports::route('/{record}/edit'),
        ];
    }
}
