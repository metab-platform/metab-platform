const a=[.01,.01,0,.94,0,0,0,.01,0,.22,0,.87,.62,0,0,.7,.06,.74,.01,.98,.58,0,.21,.24,0,0,0,.11,0,0,0,0,0,.13,.27,.1,0,.01,0,0,.52,0,0,.65,.19,.13,.4,.44,.01,0,.08,.7,.42,0,0,.01,0,0,.01,0,0,0,0,.29,.53,0,0,.02,.38,.28,.89,.02,0,0,0,.84,.05,0,0,.01,0,0,.78,0,.1,0,0,.21,0,0,0,.74,0,0,.81,.06,0,.02,.35,0,.41,0,0,.25,0,.42,.08,.22,0,0,.92,0,.22,0,.53,0,.5,0,.03,0,.39,.01,.01,.61,.39,0,0,.9,0,0,.01,.1,.7,0,.22,.79,0,0,0,.68,0,.28,0,0,.34,.81,.96,.35,0,.19,0,.07,.82,.88,.02,0,.2,.77,.01,0,.01,0,.74,0,0,0,0,0,0,0,.31,0,.05,.81,0,0,.5,0,0,0,.9,.51,.65,0,0,.34,.23,.33,.02,.04,.24,0,.75,0,0,0,0,0,.71,0,.27,0,0,.87,0,0,.99,0,0,.56,.13,0,.13,0,0,0,.75,.02,0,0,0,0,0,0,0,0,0,0,0,0,.82,.75,0,0,.59,.16,.01,.38,.53,.84,0,0,.16,.07,0,.62,.37,.01,.26,.38,.01,.01,0,.01,0,.47,.16,0,.03,0,.58,.03,0,0,.06,0,0,0,.24,0,.08,.01,0,0,0,.86,0,0,0,.01,0,0,0,0,0,0,0,0,0,.02,.08,0,0,.53,0,0,.6,0,.1,0,.91,0,0,.18,.27,0,.27,0,0,.91,0,.46,.11,.51,0,0,0,0,0,0,0,.49,0,0,.03,0,0,.3,.09,0,0,0,0,.93,0,.56,0,0,.06,.02,0,0,.25,.14,0,0,.21,0,0,0,0,.82,.02,0,0,0,0,.16,0,0,0,.17,0,.14,.93,0,.02,0,0,.95,.51,.01,0,.01,0,0,.67,0,.32,0,.88,.41,.87,.45,.55,0,.03,.91,0,0,0,.4,.39,.76,.83,0,0,.07,.74,.46,.04,0,0,0,0,.68,.01,0,0,0,0,0,.77,0,0,.93,0,0,0,0,.1,0,0,.35,.01,0,0,.8,0,.27,.31,.03,0,.28,0,0,.01,0,0,0,0,0,0,.56,.01,0,0,0,.58,0,0,0,0,.03,.33,.07,0,0,0,0,0,0,0,0,.64,0,0,.15,0,0,.37,0,0,.99,0,0,0,.06,0,0,0,0,0,0,.01,0,0,.2,0,0,.32,.96,.69,.27,0,0,.01,.05,0,.12,0,.78,0,0,0,.62,.08,0,0,0,0,.01,0,.08,.01,0,.01,0,0,0,.02,0,.02,.99,0,.51,.08,.03,.54,0,0,.01,.38,.32,.46,.03,0,0,.48,.43,.78,0,.11,.02,.01,.25,.04,.04,0,.63,0,0,0,0,0,.18,0,.73,0,.34,0,0,0,.08,.32,.24,.63,.19,0,.05,0,0,.23,.02,0,0,.11,0,0,.05,0,.11,0,0,0,0,0,0,0,0,.25,.85,.93,0,.06,0,0,0,0,.05,0,0,0,0,0,0,0,.07,.74,.91,.29,0,.12,0,.46,.88,0,.7,.07,.77,.07,.82,0,.59,0,.07,.26,0,0,.29,.5,0,0,0,0,0,0,.04,.46,0,0,0,0,.22,.03,0,.44,0,.17,0,.79,0,0,0,0,.17,.01,.05,.06,.95,0,0,0,0,.07,.18,.94,0,0,0,0,.83,.29,0,0,.85,0,0,0,.18,.88,.36,0,0,0,.01,0,0,0,.24,.18,.03,.09,.07,.47,.74,.01,0,0,0,0,.01,0,0,.39,.1,.07,0,.63,0,0,.46,.01,.01,.71,.14,.15,.15,.01,.52,.01,0,0,.23,0,0,0,0,.04,0,0,0,0,.75,0,0,0,.5,.1,.78,0,0,0,0,.45,0,0,0,.04,0,.31,.78,.07,0,0,.12,.6,.8,0,.67,.04,0,0,0,.87,0,0,.3,.01,.02,.17,0,0,.25,0,0,0,.09,0,0,0,.35,.47,0,0,0,0,0,0,0,0,.01,0,.1,0,0,0,0,0,0,.95,.02,0,0,0,0,0,.01,0,.63,.75,.18,0,.01,0,.03,0,0,.81,0,.74,.02,.12,0,.32,0,.2,0,.07,.7,.11,0,0,.52,.52,.07,.06,0,.01,0,0,0,.47,.04,0,0,.51,0,0,.44,.61,0,0,.32,.7,0,0,0,0,.81,0,0,.86,0,.21,.07,0,.02,.06,.57,.29,.52,.67,0,.01,0,.26,0,.08,.1,0,0,.37,0,0,.28,0,0,0,.63,0,0,0,0,0,.7,0,.01,0,0,0,.1,.32,.29,.89,0,.41,0,.7,0,.87,0,0,.2,0,0,.31,.01,.26,.37,.01,.06,0,0,0,0,.28,0,0,0,0,0,0,0,0,0,0,.75,0,0,.38,.01,0,0,.34,.11,.11,0,.89,.45,.19,.49,0,.64,.01,.57,0,.03,0,0,0,.33,.43,.51,0,.83,.56,.01,0,.25,0,.69,.03,0,0,.12,.03,0,0,0,0,.08,0,.01,0,.14,.48,.34,.48,0,0,.78,0,.69,.18,0,.52,.31,.19,.19,.78,.71,.34,.9,.27,.47,.17,.19,.05,1,.04,0,0,0,0,.09,0,.13,.37,.5,0,.39,0,0,.9,0,0,.68,.26,.08,.05,.18,.02,0,.26,0,0,.11,.01,.53,.2,0,0,.28,.48,0,.54,0,0,0,0,0,.01,0,0,.14,.01,.18,0,0,0,.75,.81,0,0,0,0,0,0,.3,0,0,0,0,.41,0,0,.02,0,0,.33,.01,.52,.76,0,.04,.39,.01,0,0,.66,.11,0,.01,0,0,.13,0,0,0,.41,0,.99,0,0,0,0,.18,0,.35,.06,0,0,.79,0,.01,.21,0,0,0,.03,0,.02,.3,0,.63,.78,0,0,.45,.17,0,0,0,.11,0,0,.04,.13,.26,0,.9,.47,0,0,.38,0,.08,0,0,.55,.7,0,0,.71,0,.52,0,.06,.88,0,0,.65,0,0,0,0,0,0,0,0,.38,0,0,0,.78,0,.54,0,.56,.06,.27,.79,.58,0,.34,0,0,.08,0,.66,.38,.05,.23,0,.59,.09,0,0,0,0,0,.76,0,0,0,.21,0,0,0,0,.88,0,.51,0,0,.22,0,0,.01,.88,0,0,.4,.19,0,.99,0,0,.02,0,.7,0,.1,0,0,0,.64,.92,.44,0,0,0,.46,.29,.31,.45,.05,0,.26,0,.77,.57,0,.29,.47,0,0,.29,0,0,0,.49,.27,.01,0,0,0,0,.92,0,.28,0,.62,0,.78,0,.05,.93,.37,0,.05,0,0,.05,.96,0,.88,.83,.27,.74,0,0,0,.55,0,.4,0,0,0,0,0,.9,.07,.79,0,0,.04,0,.06,0,0,0,0,.12,.17,0,0,0,.35,0,.02,0,0,0,.03,0,0,0,0,.09,0,.56,0,.87,.44,.44,.53,.45,0,0,.01,.12,.04,0,.28,.19,0,.12,.06,0,0,0,0,.07,0,0,0,0,0,0,0,.46,.18,.16,0,0,0,.11,.14,0,0,0,0,0,.85,.32,.25,0,.05,.15,1,.25,.68,.01,0,.26,.52,0,0,0,0,0,0,0,.11,.04,.36,0,0,0,.09,.05,0,0,.02,.01,0,0,.88,0,0,0,0,.65,0,.1,.03,0,.9,0,.2,.37,0,0,.54,0,.05,.01,0,.12,.01,0,0,0,0,.6,.23,0,.44,0,0,.91,0,.46,.01,.33,.35,.56,0,0,.08,.61,0,0,0,0,0,.39,.73,.55,0,0,0,0,0,0,.44,0,0,0,.04,.03,.01,0,.35,0,0,0,.4,0,0,.43,0,.02,0,0,.46,.84,0,.5,0,0,.03,.31,0,.92,.91,.23,0,.77,.08,0,0,0,0,0,0,.19,0,0,.18,.04,0,.94,.61,0,.32,0,0,0,0,0,0,.12,.01,0,.71,.28,0,.06,0,0,0,0,.16,0,0,0,0,0,0,0,0,0,0,.05,0,0,.49,0,.23,0,0,.42,0,0,.03,0,0,.27,.04,0,0,0,0,0,0,.01,.97,0,0,0,0,.19,0,0,0,0,0,.74,.42,0,0,0,0,0,.97,0,0,0,.59,0,0,.2,.01,0,0,.07,0,.14,0,0,0,0,0,.17,.62,0,0,0,0,.39,.5,0,0,0,0,0,0,.21,0,.02,0,.25,0,.48,.71,.41,0,0,.01,0,.28,0,.18,.01,0,0,0,0,0,.02,.4,.33,0,0,.46,.05,0,0,0,.04,0,.04,.11,0,0,0,0,.29,0,0,0,0,.53,0,0,0,0,0,0,.19,.11,0,.1,0,.48,0,0,.6,0,.01,.01,0,0,.01,.05,0,.12,.14,0,0,.09,.93,0,0,.01,.01,0,.01,0,0,0,0,.35,.73,.12,0,.65,0,.49,0,0,0,0,0,.02,.09,0,0,0,0,.45,0,0,0,.01,.26,.35,.03,0,0,0,0,0,.13,0,0,0,.32,.02,.03,.73,0,.03,0,0,0,0,.73,0,0,0,0,.26,.67,0,0,.11,.11,0,.07,.1,.58,.35,.17,.75,0,0,.41,0,0,.04,0,.81,0,0,.47,0,0,0,0,.04,0,0,0,0,0,.01,0,0,0,0,0,0,.49,0,0,0,0,0,.44,0,0,0,0,.32,0,0,0,0,0,0,0,.48,0,.79,.01,0,0,.21,0,0,0,0,0,0,0,0,0,.26,.97,.22,.83,.39,.39,0,.3,0,.15,0,.2,0,.8,.06,.68,.58,.01,.23,0,.46,0,0,0,.03,0,.85,.26,.1,.63,0,.39,.01,0,0,0,.38,0,.35,0,.3,0,0,0,0,.76,0,.01,.08,.86,0,0,.11,0,0,0,0,.02,.06,0,0,0,.07,.15,.43,0,0,.77,0,0,0,0,0,0,0,0,.14,0,0,0,.8,0,0,.26,.34,.34,0,.11,.29,0,0,.8,0,.08,.6,.37,0,0,0,0,.41,.28,.86,0,0,.95,.63,0,.44,0,0,0,.01,0,0,0,0,0,.63,.04,0,0,0,.4,.61,.08,.17,0,0,.73,0,.88,0,0,.76,0,.1,.08,0,.2,.23,.57,0,0,0,0,0,.96,0,0,.91,.01,.54,.37,0,0,0,.02,0,0,0,0,0,0,0,0,.37,0,0,0,0,0,.39,0,0,0,0,.01,0,0,0,0,0,0,0,.01,0,.56,0,.04,0,0,0,0,0,.71,0,0,0,0,0,.15,0,.08,.98,0,0,0,0,0,.92,.05,.09,0,0,0,0,0,.81,0,.18,.34,.01,.69,0,.07,0,0,.07,.77,0];export{a as pvalData};
