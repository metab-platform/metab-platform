const a=[0,0,0,.34,0,.15,0,.11,0,.02,0,.53,.43,0,0,.94,0,.94,.01,.75,.5,0,.42,0,0,0,0,.57,.01,0,0,0,0,.31,.03,.08,0,0,0,0,.78,0,0,.52,.49,0,.48,.68,.91,0,0,.68,.09,0,0,0,0,.17,.1,0,0,0,0,.52,.17,0,0,0,.42,.77,.56,0,0,.01,0,.72,.24,0,0,.73,0,0,.99,0,.03,0,0,.14,0,0,.2,.43,0,0,.34,.69,0,.04,.14,0,.27,0,0,.32,0,.38,.09,.52,0,0,.82,0,.78,0,.24,0,.03,0,.05,0,.64,.08,0,.31,.54,0,0,.14,.01,0,.41,0,.75,.07,0,.42,.33,.01,0,.71,0,.43,0,0,.61,.53,.95,.72,0,.31,0,.01,.68,.29,.17,.21,.33,.67,.06,0,.71,0,.47,0,0,0,0,0,.43,0,.7,.03,.36,.03,0,.14,.33,.05,0,0,.96,.39,.63,0,0,.66,.32,.21,.04,.08,.34,0,.37,0,0,0,0,0,.83,0,0,0,0,.59,0,0,.17,0,0,.2,.42,0,.38,0,.2,0,.99,.01,.07,.01,0,0,0,0,0,0,.15,.02,0,.52,.24,.37,0,0,.19,.33,0,.06,.75,.38,0,0,.48,.58,0,.65,.18,.07,.41,.56,.15,.01,0,.01,0,.58,.57,0,.61,0,.58,.86,0,0,.93,0,.1,0,.05,0,.16,0,0,0,0,.59,.4,0,0,.76,.02,0,0,0,0,0,.06,0,.14,.06,.37,0,0,.34,.01,0,0,0,.08,.01,.38,0,.01,.14,.45,0,.75,0,.29,0,0,.44,.12,.67,.01,.01,.25,.37,0,.01,0,.22,0,0,.9,0,0,.01,.56,0,0,0,.03,.44,0,.51,.02,0,.83,.03,0,0,.01,.65,0,0,.38,0,0,.04,0,.02,.05,.01,0,0,0,.57,0,0,0,.09,.04,.34,.49,0,.42,0,0,.39,.62,0,0,.44,0,.01,.03,0,.8,.04,.31,.51,.42,.22,.73,0,.26,.73,0,0,0,.61,.4,.83,.91,0,0,.06,.02,.7,.02,.13,0,0,.02,.31,0,0,0,0,0,0,.01,0,.35,.86,0,0,.02,.01,.17,0,.15,.77,0,0,0,.97,.01,0,.65,.78,0,.19,.52,0,.16,0,0,0,0,0,0,.51,.02,0,0,0,.2,0,0,0,0,.63,.59,.95,.04,0,.11,0,0,0,0,0,.72,.02,0,.63,0,0,.83,0,0,.51,.03,0,0,0,0,0,0,0,0,0,.04,.32,0,.01,0,0,.33,.67,.66,0,0,0,.89,.51,0,.62,.01,.1,0,0,0,.16,.83,0,0,0,0,.44,0,.15,.02,.1,.17,.04,0,0,.18,0,.34,.79,0,.97,.29,.02,.54,0,0,.77,.15,.31,.87,.16,.01,0,.13,.57,.83,.15,.18,.15,.62,.03,.49,.24,0,.86,.01,0,0,0,0,.18,0,.12,0,.25,0,.07,.08,.14,.28,.06,.23,.98,.05,.65,0,0,0,0,0,0,.3,0,.01,.04,.44,.12,0,.06,0,0,0,0,.08,0,.28,.18,.63,0,.12,0,0,0,0,.02,0,0,0,0,0,0,.29,.19,.21,.45,.53,0,.69,0,.06,.84,0,.58,.47,.85,.62,.49,0,.74,.31,.02,0,.11,0,.44,.31,0,0,0,0,0,0,.96,.93,0,.14,0,0,.82,0,0,.08,0,.46,0,.18,0,.37,0,0,.29,0,.37,.13,.33,0,0,0,.24,0,.21,.33,.1,0,0,0,.8,.09,0,0,.02,0,0,0,.18,.88,.25,0,0,.09,0,0,0,0,.63,.23,.01,.51,.12,.69,.58,0,.02,0,0,0,0,0,0,.46,.6,.05,0,.64,0,0,.56,.15,0,.2,.45,.11,.22,.07,.22,.01,0,0,.8,0,0,0,0,.01,0,0,0,0,.92,0,.41,0,.46,.48,.44,0,0,0,.05,.56,0,0,0,.65,0,.14,.9,.03,.01,0,.04,.83,.03,0,.45,0,0,0,0,0,0,0,.08,.31,.06,.17,.31,0,.37,.02,0,0,.04,0,.02,0,.34,.5,0,0,0,0,0,.28,.05,0,.83,0,0,0,0,0,0,0,0,.35,.01,0,0,0,0,0,.01,.22,.6,.86,.02,0,0,0,.36,0,.22,.33,0,.85,0,.24,0,.99,0,.2,.01,.2,.47,.91,0,.4,.03,.72,.07,.28,.01,.06,0,0,0,.6,.82,.05,0,.86,.01,0,.7,.81,.02,0,.45,.84,.04,.19,.53,0,.87,0,0,.74,0,.34,.49,0,.15,.34,.72,.03,.11,.6,.02,.54,.36,.17,.05,.37,.15,0,0,.08,0,0,.59,0,0,0,.59,0,0,0,0,0,.7,0,.01,0,0,0,.07,.91,.84,.88,0,.29,.13,.53,.91,.76,.05,.43,.02,0,0,.87,.74,.38,.81,.48,.56,0,0,0,0,.54,0,0,.2,0,0,0,0,0,0,0,.35,0,0,.92,.39,.29,0,.57,.64,.04,0,.34,.76,.26,.36,.28,.8,.32,.01,0,.39,0,.02,0,.17,.7,.8,0,.17,.73,.13,0,.21,.02,.19,0,0,0,.42,.42,.1,0,0,0,.76,0,0,0,.34,0,.29,.57,0,0,.89,.01,.8,.18,.12,.65,.58,.16,.32,.89,.83,.4,.59,.15,.27,.17,.09,.13,.79,.68,0,0,.09,.2,.01,0,0,.13,.32,0,.92,0,0,.51,.08,0,.38,.16,.54,.75,.68,.01,0,.93,0,0,.06,0,.83,.85,0,.02,.16,.66,.03,.64,.01,.02,0,.32,0,.02,.09,0,.41,0,.45,.56,0,.03,.72,.64,0,.01,0,0,0,0,.16,.01,.01,0,0,.95,0,0,.73,0,0,.42,.02,.61,.71,0,.85,.27,0,0,0,.93,0,0,.02,0,0,.24,.09,0,0,.98,0,.01,0,0,0,0,.17,0,.91,.09,0,0,.42,.07,.02,.04,0,.01,0,.06,0,.03,.18,0,.79,.45,0,.46,.11,.66,0,0,.01,.1,0,0,.6,.16,.76,0,.59,.48,0,0,.73,0,.05,0,.13,.44,.05,0,0,.2,.16,.77,.16,.2,.93,0,0,.15,0,0,0,0,0,0,0,.95,.23,0,.01,0,.28,0,.34,0,.69,.97,.13,.25,.03,0,.18,0,0,.52,0,.88,.61,.03,.39,0,.79,.01,0,0,0,.52,0,.85,0,.01,0,.35,0,0,.11,0,.92,0,.02,0,.06,.9,0,0,.4,.96,0,0,.71,.53,.09,.87,0,.02,.76,0,0,0,.25,0,0,0,.66,.51,.78,0,0,0,.26,.58,.52,.56,.06,0,.54,0,.22,.29,.31,.18,.22,0,0,.68,0,0,0,.19,.42,.09,0,0,0,0,.91,0,.36,0,.01,.01,.69,0,0,.54,.33,0,.5,0,.06,0,.87,0,.23,.58,.32,.1,0,0,0,.01,.01,.87,0,0,0,0,0,.26,.08,.45,0,0,.51,0,.14,0,0,0,0,.77,.67,.01,0,0,.44,.01,.68,0,0,.56,.79,0,0,0,0,.34,0,0,0,.39,.09,.32,1,.66,0,0,.02,.11,0,0,.41,.46,0,.42,.05,0,0,0,0,.13,0,.09,0,.68,.06,0,0,.51,.68,0,.22,0,0,.45,.03,0,.01,0,0,.04,.47,.07,0,.01,.01,.82,.62,.76,.51,.19,0,.23,.98,0,0,.26,0,.01,0,0,0,.86,.18,0,0,.35,.22,.96,0,0,0,.09,0,0,.13,0,0,.03,.29,.45,0,.41,.17,0,.95,0,.33,.41,0,.92,.31,0,.07,.5,0,.75,.12,0,0,0,0,.97,.04,0,.33,0,0,.07,0,.6,.73,.44,.13,.65,0,0,.02,.18,0,0,0,0,.29,.38,.96,.13,.57,0,.04,0,0,.01,.45,.01,0,0,.01,0,.02,0,.08,0,0,0,.12,.05,0,.84,0,.72,0,0,.55,.91,0,.05,0,0,.47,.79,0,.5,.84,.11,0,.45,.01,0,0,0,0,0,0,.78,0,0,.01,.53,0,.54,.06,0,.06,0,0,.45,.02,0,0,.52,.01,0,.99,.07,.01,.71,0,0,0,0,.54,.24,0,0,0,0,.03,0,0,0,0,.18,.18,0,.68,0,.02,0,0,.64,.06,0,0,0,0,.04,.03,0,0,0,.05,0,0,0,.56,0,0,0,0,.41,0,.07,0,0,0,.03,.57,0,0,0,0,0,0,0,0,0,.6,.08,.01,0,.47,0,.02,.08,0,.82,0,0,0,0,0,.09,.37,0,0,0,0,.05,.73,0,0,0,0,0,0,.13,0,.01,0,.75,.57,.79,.3,.75,0,0,.01,0,.34,0,.46,.21,0,0,0,0,0,.98,.06,.24,0,0,.9,.11,0,0,0,.75,0,.78,.28,0,0,0,.57,.51,0,0,0,0,.94,0,0,0,0,0,0,.01,.01,0,.09,0,.45,0,0,.75,0,.03,0,0,.01,.37,0,0,.19,.39,.12,.01,.24,.91,0,0,0,.45,0,0,0,0,0,0,.97,.62,1,0,.92,0,.67,.01,.01,.1,0,0,0,.11,0,0,.05,0,.8,0,0,0,0,.7,.94,.14,.03,.03,0,0,0,.44,0,0,0,.55,.2,.04,.5,0,.12,0,0,0,0,.83,0,0,0,0,.1,.2,0,0,.05,.07,0,.2,.02,.29,.72,.09,.37,0,0,.11,0,0,.05,0,.47,0,0,.76,0,0,0,0,.21,0,0,0,0,0,.07,0,0,0,0,0,0,.67,0,0,0,.63,.08,.93,.33,0,0,0,.67,0,0,0,0,0,0,0,.79,0,.98,0,0,.39,.26,.34,0,0,0,0,.09,0,0,0,.21,.75,.24,.98,.6,.8,0,0,0,.58,0,.04,0,.69,.51,.84,.96,.04,.1,0,.96,.31,0,.05,.02,0,.41,0,.2,.63,0,.26,.79,0,0,0,.56,0,.65,0,.82,0,.02,0,0,.56,0,.03,.02,.52,0,.02,.06,0,0,0,0,0,.54,0,0,.01,.2,.17,.64,0,0,.96,0,0,0,.01,.19,0,0,.01,.6,0,0,0,.14,0,0,0,.68,.72,0,.04,.27,0,.07,.37,0,.82,.59,.12,0,0,0,.48,.92,.1,.85,0,0,.39,.88,.04,.34,0,0,0,.92,0,0,0,0,0,.71,.8,0,0,.46,.01,.89,.05,.39,0,0,.08,0,.31,0,0,.71,0,.74,.27,0,.16,.52,.51,0,0,0,0,0,.55,0,.02,.02,.08,.49,.22,0,0,.07,.22,0,0,0,0,0,.01,0,.01,.73,0,0,0,0,0,.16,0,.06,0,0,.01,0,0,0,0,0,0,0,.91,0,.01,0,.09,0,0,0,0,0,.16,0,0,.03,0,0,.51,0,0,.78,0,0,0,0,.06,.22,.61,.79,0,.52,0,0,0,.19,0,.27,.15,.66,.1,0,.82,.91,0,.28,.15,0];export{a as pvalData};
