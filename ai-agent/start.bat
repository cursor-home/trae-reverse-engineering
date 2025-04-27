@echo off
REM for dev

if defined MARSCODE_DEV_MODE (
    if defined MARSCODE_DEV_AI_AGENT_MANUAL (
        :loop
        timeout /t 99999 >nul
        goto loop
    ) else (
        set "AI_NATIVE_ENV=desktop"
        set "RUST_LOG=debug"
        set "CLOUDIDE_TENANT_NAME=cn"
        set "ICUBE_MODULAR_DATA_DIR=%USERPROFILE%\.icube"
        set "DB_PATH=%USERPROFILE%\.icube\ai-agent\database.db"
        set "FILE_BASE_DIR=%USERPROFILE%\.icube\ai-agent\snapshot"
        set "ICUBE_PRODUCT_PROVIDER=Spring"
        cargo run
    )
) else (
    if "%ICUBE_PRODUCT_TYPE%"=="desktop" (
        if "%TRAE_RESOLVE_TYPE%"=="ssh" (
            set "AI_NATIVE_ENV=desktop_ssh"
        )  else (
            set "AI_NATIVE_ENV=desktop"
        )
    ) else if "%CLOUDIDE_TENANT_NAME%"=="bytedance" (
        set "AI_NATIVE_ENV=cloudide"
    ) else if "%CLOUDIDE_PROJECT_SCENE%"=="practice" (
        set "AI_NATIVE_ENV=practice"
    ) else if "%CLOUDIDE_PROVIDER_REGION%"=="cn" (
        set "AI_NATIVE_ENV=marscode_boe"
    ) else if "%CLOUDIDE_PROVIDER_REGION%"=="us" (
        set "AI_NATIVE_ENV=marscode_boei18n"
    ) else if "%CLOUDIDE_PROVIDER_REGION%"=="sg" (
        set "AI_NATIVE_ENV=marscode_boei18n"
    ) else (
        set "AI_NATIVE_ENV=marscode_boe"
    )

    set "DB_PATH=%ICUBE_MODULAR_DATA_DIR%\ai-agent\database.db"
    set "FILE_BASE_DIR=%ICUBE_MODULAR_DATA_DIR%\ai-agent\snapshot"

    ai-agent.exe
)
