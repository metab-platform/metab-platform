const a=[.02,0,0,.14,0,.25,.03,.95,.53,0,0,.02,.23,0,0,.83,.21,.9,.01,.86,.95,0,.21,.08,0,0,.01,.01,.09,.04,0,.01,0,.24,.11,.16,0,.01,0,0,.76,0,0,.5,.95,.05,.58,.26,.08,0,.1,.78,0,0,0,.01,.01,.11,.2,0,0,0,0,.75,.67,.01,0,0,.28,.73,.31,0,0,.08,0,.94,.34,0,0,.12,0,0,.52,0,.92,0,0,.52,0,0,0,.8,.19,0,.09,.72,0,.67,.7,0,.07,0,0,.3,0,.51,.05,.01,0,0,.29,0,.4,0,.5,0,.71,.01,.01,0,.3,.01,0,.08,.25,0,0,0,.04,0,.66,.06,.49,0,0,.05,0,.25,.05,.26,0,.93,0,0,.68,.53,.78,.58,0,0,0,.92,.74,.14,.84,.02,.15,.14,.08,0,.04,0,.71,0,.32,0,0,.01,.4,0,.63,.03,.53,.19,0,.02,.68,.05,0,0,0,.15,.18,0,0,.33,.11,0,.01,.35,.45,.1,.16,0,0,0,0,.06,.9,.17,.76,0,0,.89,0,0,.64,0,0,.61,.92,0,.25,0,.13,0,.72,.73,.04,.02,0,0,0,0,0,0,.36,.09,0,.04,.66,.35,0,0,.88,.39,0,.7,.99,.7,0,0,.71,.18,.37,.26,.08,.12,.41,.99,.06,.02,0,.11,0,.4,.3,.02,.06,0,.54,.04,.01,0,.97,0,.32,0,.44,0,.52,.01,0,0,0,.66,.37,0,0,.03,0,.01,.32,0,0,0,.46,0,.04,.37,.92,0,0,.6,.83,0,.11,.04,.51,0,.16,0,.2,.4,0,.02,.93,0,.25,.13,0,.65,.04,.95,0,0,.21,.03,0,0,0,.07,0,0,.07,.02,0,.02,.21,.01,0,0,0,.62,.01,.89,.01,0,.22,.18,0,0,.09,.12,0,0,.34,0,0,.01,0,.8,.01,.01,0,.1,0,.91,0,0,.28,.97,.07,0,.63,0,.21,0,0,.66,.32,.12,.65,.62,0,.01,.77,0,.72,0,.93,.27,.19,.63,.5,0,.58,.69,0,0,0,.06,.15,.7,.99,0,0,.1,.05,.11,.98,.51,0,.08,0,.39,0,0,0,0,0,0,.29,0,.01,.35,0,0,0,0,.39,0,.43,.36,.12,0,0,.82,.02,.62,.29,.4,.02,.01,.13,0,0,0,0,0,0,0,0,.06,0,0,0,0,.02,0,0,0,0,.48,.17,.9,0,0,.75,0,0,0,0,0,.55,.61,0,.61,0,0,.07,0,0,.57,.01,0,0,.82,0,.01,0,0,0,.3,0,.45,0,.22,0,0,.42,.02,0,.83,0,0,.21,.37,0,.15,.01,.05,0,0,0,.23,.65,0,0,0,0,.59,0,.07,0,.03,0,.29,0,0,.73,0,.29,.53,0,.74,0,0,.18,0,.03,.24,.04,.28,.5,.07,0,0,.01,0,.25,0,.03,.46,.5,.5,.03,.6,0,.6,.24,0,0,0,0,.22,0,.8,0,.94,0,.04,.39,.45,.99,.33,.97,.79,0,.44,0,0,.88,.14,0,0,.03,0,0,.07,.37,0,0,.16,0,0,0,0,.06,0,.32,.21,.86,0,.53,0,0,0,0,0,0,0,0,0,0,0,0,.04,.21,.23,.94,0,.81,.07,.4,.43,0,.41,.58,.17,.74,.97,0,.52,.26,.47,.32,.07,0,.08,.07,0,.01,0,0,0,0,.05,.48,.01,.1,0,0,.01,.23,0,.02,0,.26,0,.43,0,.05,0,0,.01,.03,.21,.01,.69,0,0,0,0,.07,.01,.3,.24,0,0,.16,.25,.91,.01,0,.32,0,0,0,.64,.16,.02,0,0,.93,0,0,0,0,.08,.82,.14,.7,.04,.89,0,0,.01,0,0,0,.62,.03,0,.08,.32,.07,0,.78,0,0,.08,0,.01,.7,.01,.02,0,.06,.05,.91,0,0,.91,0,0,.16,0,.28,0,0,0,0,.96,0,.01,0,.15,0,.82,0,0,0,.16,.67,0,.33,0,.23,0,.79,.49,.75,.09,0,.07,.76,.44,0,.53,0,.01,0,.1,.33,0,0,.14,0,.66,.72,.07,0,.77,0,0,.02,.64,0,0,0,.87,.05,0,0,0,0,0,.46,.2,0,.58,0,.01,0,.01,0,0,0,0,.01,.01,0,0,0,0,.01,.14,0,.96,.47,.97,0,0,0,.52,0,.01,.67,0,.53,.54,.37,0,.09,0,.39,0,.17,.77,.7,0,.54,.94,.62,.8,.07,.03,.01,.01,0,0,.07,.56,.04,0,.1,.06,0,.91,.5,.02,.02,.25,.9,0,0,.03,.24,.33,0,0,.41,0,.1,.55,0,.06,.46,.42,.06,.18,.11,0,.72,0,.59,.05,.7,.19,.08,0,.51,0,0,.11,.08,.52,0,.24,0,0,0,0,0,.44,0,.17,0,0,0,.88,.22,.02,.85,0,.83,0,.41,.08,.4,.12,.27,.22,0,.01,.09,.07,.58,.69,.56,.02,.04,0,0,0,.31,0,0,.01,.08,0,0,0,0,0,0,.71,0,0,.43,.14,.25,0,.19,.01,.6,0,.27,.98,.5,.01,.73,.69,.1,.31,0,.87,0,.11,0,.2,.52,.49,0,.23,.85,0,0,.03,.19,.07,.03,0,0,.1,.37,.01,0,0,0,.8,0,.75,.01,.7,.57,.15,.12,.01,0,.9,.01,.5,.47,.1,.04,.75,.04,.19,.81,.8,.19,.45,.68,.45,.96,.09,.11,.59,.18,0,.04,.36,.71,.14,0,.21,.04,.55,0,.06,0,0,.25,.52,0,.78,.07,.48,.15,.08,.01,0,.66,0,0,.5,0,.54,.1,0,0,.13,.53,0,.32,.08,.14,0,.03,0,0,.03,.81,.39,.08,.85,.8,0,.22,.82,.55,0,.01,.05,.01,.15,0,.69,0,.02,0,0,.94,0,0,.12,0,0,.41,.02,.92,.73,0,.41,.23,.01,0,0,.04,.06,0,.01,0,0,.39,.45,0,0,.05,0,.82,.77,0,.03,0,.74,0,.17,.01,0,0,.88,.02,.03,.42,0,.09,0,.09,0,.51,.1,0,.44,.29,.02,.01,.08,.71,0,0,.01,.31,0,0,.35,.69,0,0,.34,.75,.01,0,.91,0,0,0,.06,.24,0,0,0,.36,.03,.97,.49,.03,.94,.03,0,.5,.02,0,0,0,0,0,0,.04,.01,0,.01,0,.65,0,.66,.01,.61,.26,.27,.61,.84,.01,.06,0,0,.25,0,.49,.3,0,.73,0,.52,.14,0,0,0,.43,0,.36,0,.01,0,.36,0,0,.41,0,.56,.01,.72,0,.13,0,0,0,.01,.99,0,0,.97,.48,0,.94,.01,.05,.01,0,.28,0,.46,0,0,.01,.85,.56,.81,0,0,0,.95,.79,.38,.79,.22,0,.2,0,.22,.67,0,.27,.03,0,0,.41,0,0,0,.03,.76,.18,.01,0,.02,.03,.39,0,.33,0,.54,.02,.17,0,.12,.67,.03,0,.21,0,.99,.91,.95,0,.67,.92,.13,.79,0,0,0,.79,.14,.8,0,0,0,0,.01,.08,.97,.22,0,0,.7,0,.64,0,0,0,0,.53,.01,.01,0,0,.95,.03,.49,0,.07,.09,.69,0,0,0,.04,.4,0,.79,0,.23,.47,.19,.41,.69,0,.03,0,0,.01,.05,.87,.99,0,.76,.18,0,.03,0,0,.84,0,.01,0,.08,.01,0,0,.15,.76,.15,.16,0,0,.39,.02,0,.16,0,0,.01,.65,.17,.47,0,.01,.3,.43,.81,.87,.1,0,.17,.6,0,0,.05,0,.02,0,0,.06,.2,.94,0,0,.02,.88,.21,0,0,.01,.56,0,0,.88,0,0,.03,.5,.27,0,.06,.08,0,.09,.25,.23,.16,.05,.19,.11,0,.51,.2,0,.36,.06,0,0,0,0,.19,.61,0,.3,0,0,.63,0,.38,.58,.87,.01,.99,0,0,.83,.06,.01,0,0,0,.74,.75,.9,.97,.29,.01,.02,0,0,0,.32,0,0,0,.06,.01,.01,0,.74,0,0,0,.49,.22,0,.15,0,.27,0,0,.97,.56,0,.51,0,0,.03,.72,0,.27,.8,.16,0,.43,.05,0,0,0,0,0,.01,.15,.03,.01,.71,.26,0,.25,1,0,.08,0,.01,.03,0,0,0,.98,.04,0,.32,.14,.01,.43,0,.02,.07,0,.86,.01,0,0,0,0,0,0,0,0,.16,.5,.06,0,.41,0,.08,0,0,.88,.01,0,0,0,0,.7,.08,0,0,0,.01,0,0,0,.5,0,0,.06,0,.57,0,.07,0,0,0,.94,.34,0,0,0,.05,0,.15,0,0,0,.06,.06,0,.35,.16,0,.02,.04,0,.71,.01,.02,0,0,0,.33,.02,0,.34,0,0,.61,.02,0,0,0,0,0,0,.15,0,.05,0,.01,.12,.87,.04,.49,.04,0,.52,0,.11,0,.76,.02,0,0,0,0,0,.76,.24,.92,0,0,.94,.17,0,0,0,.57,0,.85,.1,0,.14,0,.3,.18,0,0,0,0,0,0,0,0,0,.01,0,.59,.21,0,.15,0,.25,0,0,.16,0,0,.49,0,0,.02,.02,0,.48,.27,.01,.06,.65,.58,0,0,0,.09,0,.01,0,0,0,0,.84,0,.86,0,.46,0,0,0,0,0,0,0,0,0,0,0,.01,.05,.67,0,0,.02,.03,.3,.92,.95,.12,0,0,0,0,.85,0,0,0,.65,.2,.08,.95,0,.55,0,0,0,0,.4,0,0,0,.02,.18,.76,.02,0,.07,.54,0,.57,.07,.7,.06,.01,.62,0,0,.74,0,0,0,0,.03,0,0,.59,0,0,0,0,.89,0,.02,0,0,0,.66,0,0,0,0,0,.01,.39,0,0,0,.01,.02,.07,.97,0,.04,0,.63,0,0,0,0,0,0,0,.93,0,.06,.02,0,0,.1,.36,0,0,0,0,.01,0,0,0,.04,.86,.47,.54,.87,.71,0,.57,.04,.74,0,.27,0,.27,.22,.03,.23,.09,.05,0,.39,.01,0,.02,.08,0,.35,.06,.6,.38,0,.19,.09,0,0,0,.96,0,.02,0,.5,0,.04,0,0,.73,.02,.13,0,.3,0,0,.6,0,0,0,0,.25,.15,0,0,0,.28,.91,.81,0,0,.96,0,0,.4,0,.52,0,0,.01,.3,.01,0,0,.93,0,.03,.61,.74,.84,0,.04,.94,0,.02,.87,0,.78,.21,.68,0,0,0,.02,.64,.71,.67,0,0,.21,.71,.01,.35,0,0,0,.53,0,0,0,0,0,.87,.07,0,0,.03,.14,.11,.27,.16,0,0,.46,0,.66,0,0,.8,.02,.12,.74,0,.71,.29,.25,0,0,.01,0,0,.7,0,0,.75,.15,.28,.04,0,0,.04,.6,0,0,0,.03,0,0,0,0,.28,0,0,0,0,0,.01,0,0,0,0,.99,0,0,0,0,0,0,0,.71,0,0,0,.31,0,0,0,0,0,.71,0,0,0,0,0,.53,0,.06,.96,0,0,0,0,.02,.32,.42,.19,0,.01,0,0,0,.05,0,.65,.81,.14,.67,.08,.92,.01,0,.34,.9,0];export{a as pvalData};
