const a=[.02,.65,.82,.52,.7,0,.83,0,.58,.71,.17,.56,.01,.02,.1,.09,.27,.2,.07,.48,.58,.02,.27,0,.44,.54,0,0,.66,0,.63,.02,.28,.12,.67,.07,.96,.03,.75,.09,.11,.62,.01,.24,.99,.09,.03,.46,0,.08,.18,0,.1,.95,0,.03,.39,0,.04,.04,0,.41,.08,.63,.01,.11,.1,.01,.22,.47,.12,.04,0,.04,.64,.52,.92,0,.94,.53,.89,.03,.43,.53,.07,0,.84,.96,.53,.95,0,.59,.01,.02,.42,.83,.22,.29,.55,0,.63,.17,.01,.59,0,.44,.09,0,.18,.02,.39,.01,.83,.28,.98,.65,.02,.27,.52,.81,.95,.01,.04,.84,.02,.01,.8,.16,.53,.57,0,0,.96,.01,.54,.03,0,.28,.23,.18,.02,.03,.02,.47,0,.03,.8,.04,.01,.93,.2,.05,.43,.93,0,0,.84,.05,.68,.04,0,0,.48,.7,.02,0,.76,.25,0,.39,0,.23,0,.01,.14,.06,.91,0,0,.74,.58,.56,.09,.42,0,.87,.02,0,.01,.55,.98,0,0,0,0,.36,.01,.02,.08,.01,.01,.09,.76,.01,.17,0,.39,0,0,.04,0,.03,.89,.18,0,.54,.26,0,.02,.01,0,.02,.07,.99,.32,.72,0,.38,0,0,.83,.24,.17,.6,.03,0,.03,0,.03,.31,0,.01,0,0,.01,.05,.25,0,.2,.88,0,.01,0,.44,.03,.01,.59,.92,.04,.82,.28,0,.07,.02,.02,0,.01,.07,.26,.92,.41,.29,.91,.53,.99,.18,.05,0,.82,0,0,0,.05,.64,0,.24,0,.6,0,.09,.01,0,.23,.24,.02,.01,.07,.39,0,.05,.96,.8,.01,.25,.92,.32,.25,0,0,0,.77,.75,0,0,0,.04,0,0,.3,.56,.42,.81,.23,.35,0,0,.02,.72,.62,0,.7,.02,.75,.81,.19,.64,.03,0,.95,.18,.01,.23,.71,.31,.49,.31,.52,0,.09,0,.01,0,0,0,.14,.09,0,.35,.42,.92,.33,.33,0,0,.55,.97,0,.71,0,.87,.11,.98,.6,0,0,.07,.39,.08,.96,0,.07,.26,.13,.73,.03,.38,.52,.53,.34,.41,.16,0,.32,.78,.2,.82,.01,.1,.5,.14,0,0,.09,.75,0,.45,.16,.1,.02,.04,.58,.47,.06,.3,0,.03,.05,.81,0,.02,0,.21,.59,.01,.04,.86,.67,.74,0,0,0,.01,.89,.21,0,.33,.77,.08,.57,0,0,.64,.09,.86,.24,0,.91,.12,.59,.35,.04,0,.63,.04,.94,.02,0,.73,0,.07,.44,.04,.92,0,.03,.04,.82,.06,.81,.82,.01,.61,0,.02,0,.34,.22,.43,.24,0,0,.07,.02,.08,.12,0,0,.04,.24,.21,.69,.74,.72,0,.03,.45,0,.04,.19,0,0,.37,.07,.92,.91,.07,0,.04,.41,0,0,.01,.22,.34,.07,0,0,0,0,.27,.06,.25,.13,.35,.55,0,.1,0,.39,.01,0,0,.36,0,0,0,0,.23,0,.28,.23,0,0,.01,.81,.74,0,.01,.27,.07,0,.71,.6,.51,.96,.49,.01,.01,.03,.81,.76,.02,.22,.01,.65,.18,.35,.25,0,.1,.16,.52,.33,0,.38,.89,.01,.77,0,.63,.99,.01,0,0,0,.02,.83,.5,.43,.82,.24,.87,.95,.04,.03,.12,.85,.48,0,0,.28,.79,.3,0,.71,.01,0,.88,.34,.22,.92,.92,.85,0,.09,.19,.85,.04,.1,.01,.07,.09,0,.81,0,.35,.2,0,0,.26,.04,0,.11,0,.13,.01,.3,0,0,0,0,.56,.18,0,.5,.01,0,.48,.03,0,.03,.91,0,.47,.23,.67,.03,.64,.01,.96,.68,.06,.67,0,.44,.14,.6,0,.72,.76,.86,.81,.5,0,0,0,.14,.45,.69,.31,0,0,.43,.11,0,0,.82,.71,.19,0,.33,.51,0,0,.01,.51,.01,0,.23,.68,.54,.01,0,.86,.27,.58,.53,.05,.01,.02,.45,.01,0,0,.21,.3,.95,.23,.02,.73,0,0,.93,.16,.11,.19,.55,0,.01,.08,.52,.04,.28,.78,0,0,.53,.8,0,.24,.1,.13,.12,0,.28,.5,.7,.46,.03,0,0,.64,.2,0,.8,.29,.78,.26,.1,.43,.48,.15,.26,.04,.13,.31,.02,.09,0,0,0,0,.96,0,0,.86,.01,.01,.44,0,.91,.63,.76,.07,.19,0,0,0,0,0,.06,0,0,.01,.57,.05,.66,.11,.65,0,.38,.37,.24,.07,.31,.91,.02,.1,0,.26,.1,.25,.35,.16,.55,0,.08,0,.93,.91,.07,.74,.03,0,.06,.7,.6,0,.91,.51,.01,.64,0,.44,.96,0,.45,0,.01,.11,0,.08,0,0,.07,.18,.01,.51,.02,.38,.9,.21,.22,.61,.23,.03,0,0,0,.57,0,.86,.71,.07,0,0,.48,0,.05,0,.16,.94,.6,0,0,0,.24,.75,.69,0,.03,.35,.83,.61,.11,.06,0,.73,.01,.14,.71,.11,.28,0,.03,.23,.82,.05,.11,.52,.02,.28,.01,.26,0,.77,.38,0,.41,0,.02,0,.02,.32,.01,.01,.02,0,0,.17,0,.09,.8,.17,.01,.64,0,.63,.12,0,0,.34,.29,.59,.3,.6,0,.48,.06,.37,.09,.19,.01,.51,.04,0,.02,.31,.06,.02,0,.7,.04,.74,0,.04,.46,.02,.54,.15,.3,.08,.18,.44,.02,.34,.9,0,.15,.07,0,0,0,.16,.2,0,0,0,.01,.02,.66,0,.09,0,0,.01,0,.01,.01,0,.02,0,0,.1,.3,0,.75,0,.55,.82,.21,.72,.88,.03,.11,.05,.04,.37,.96,.07,.08,0,0,0,.01,.81,.02,.04,0,.64,.43,.01,.04,0,.06,.01,.13,.58,.02,.3,0,.03,.12,0,.15,.01,.46,.38,.94,.88,0,.78,0,.8,.91,0,.93,.83,.02,.32,0,.06,.11,0,.44,.34,.75,0,0,.4,0,.01,.25,.07,.01,0,.26,.63,.6,.86,0,0,0,.55,.53,.01,.54,0,0,.5,.02,.14,.62,.2,0,0,.62,.07,.01,.67,.45,.18,.03,.1,.53,.02,.03,.02,.07,.29,0,.08,0,.14,.9,.49,.87,1,.07,.27,0,0,0,.18,0,0,.68,.06,0,.86,.01,.01,.42,.03,.11,.05,.78,.03,0,.53,0,.12,.97,.01,.71,.63,.22,.01,0,.08,.85,.69,.23,0,.01,0,.23,.42,.13,.14,.6,.27,0,.02,.22,0,0,0,0,.01,.49,.15,0,.04,.73,.77,.24,.59,.06,.01,0,.01,.51,0,.01,.91,.25,.11,.32,.19,0,.44,.57,0,.51,.11,.61,.29,.22,.8,.38,.03,.05,.25,.25,.23,.85,.11,0,.01,.75,0,.03,.38,0,0,0,.34,.09,0,.34,.35,0,0,.93,0,.37,.4,.98,0,.05,.79,.11,0,0,0,.01,0,0,0,.03,.01,.15,.16,.9,.14,.53,.43,.04,0,.28,.28,.76,.08,0,.07,.04,.78,.02,0,.24,.01,0,0,.62,.79,0,0,0,.01,.64,.51,.54,0,.02,0,0,.12,0,.01,.53,.55,0,0,.4,.02,.69,.01,.01,.53,0,0,.61,0,.2,0,.66,.47,.26,.01,.4,.51,.17,0,0,.07,.44,.01,.41,0,.42,0,.58,.43,.04,.05,0,0,.66,.01,0,.62,.28,0,.13,0,0,.12,.59,.12,0,.01,.02,.02,0,.39,.83,.55,0,0,.33,.11,0,.48,.28,.22,0,.65,.09,0,.06,0,.03,.03,.27,.3,.1,0,.1,.88,0,0,0,.01,.42,0,0,0,0,0,0,0,0,0,0,0,0,0,.43,.08,.19,0,0,.72,.02,0,0,0,0,0,.09,0,0,.79,0,.53,.02,.68,0,0,0,0,0,0,.77,.23,0,.31,.76,.2,0,.11,.2,.64,0,.02,.08,0,0,.05,.02,.51,0,.04,.11,.34,.82,.52,0,.27,.28,0,.38,.01,.03,.66,.89,.08,.16,.24,.49,0,.39,0,.53,.43,.43,.02,0,.44,0,.06,0,.26,.11,0,.68,.17,.69,0,.16,.04,.53,.79,.98,.34,.02,0,.66,.03,.33,0,.21,.93,0,0,.11,.29,.9,0,0,.13,0,.12,0,.12,0,0,0,.27,0,.04,.08,.1,0,.03,0,.08,.34,0,0,.04,0,.22,0,.03,.42,.73,.75,.1,.45,.49,.98,0,.41,0,.88,.01,.05,.33,.98,.04,.09,.01,.64,.03,.69,.32,.03,.06,0,0,.02,.11,.03,.7,.35,.25,.32,.03,0,.01,0,.9,.01,.23,0,.07,0,.5,.26,0,.25,.01,.03,.82,0,0,.97,.35,.85,.68,.05,.08,.01,0,.17,.45,.04,.97,.12,.93,.21,.44,0,0,.82,.43,.01,.62,.26,.4,.78,.1,0,.2,0,.02,0,.02,.01,.89,.05,.02,.05,0,0,.01,.43,.8,.28,.81,.96,0,.01,0,.56,0,.38,.29,.1,.29,0,.03,.94,.43,.41,.54,.93,.02,.03,.74,.4,.02,.68,.01,0,.04,0,.03,0,.13,.2,0,0,0,.63,.77,.61,.18,.9,.31,0,.65,0,.49,.01,.27,.12,.02,.07,.21,0,.87,0,.01,.03,.08,.06,.03,.21,.69,0,.35,0,.38,0,0,0,0,.83,.65,.44,.02,.14,.13,.88,0,0,0,.01,0,0,0,.05,.03,0,.09,.29,0,.62,.78,.12,.02,.74,0,0,.02,.03,.05,.02,.01,0,.23,.05,.31,.52,.02,0,.41,0,.05,.54,.21,.79,.35,.13,0,.25,.87,.01,.34,.21,.31,.19,.94,.32,.45,.26,.09,.01,.05,.1,.53,.02,.11,.07,.03,.01,.09,.09,0,0,.14,.01,.01,0,.35,.03,.11,0,.21,.59,.33,.07,.57,.64,.54,.59,.44,.62,0,.1,.1,.04,.37,.53,.9,.08,.45,.01,.05,0,.85,.38,.69,.34,.22,0,0,.51,.32,.93,.59,.61,.02,.03,.03,.22,.31,.99,.83,.07,0,0,.63,0,0,.21,.93,.26,.44,.04,.03,0,.02,.01,0,.39,.03,0,.02,.01,0,1,.04,0,0,.03,.63,.34,.53,.64,.19,.01,.03,0,.82,.67,.11,0,.44,0,.01,.68,0,0,0,.13,0,.52,.49,.31,.75,.73,0,0,.51,0,.01,0,.06,.07,.36,0,0,.01,.27,.23,.69,.47,.87,0,.07,0,.01,.41,0,.01,0,.77,.21,.05,0,0,0,.24,.04,.57,.02,.25,.58,.94,0,0,0,.3,.35,.06,.61,.02,.08,0,.89,0,.01,.17,0,.95,.08,.31,0,.05,0,.46,0,.4,.83,.57,.01,.14,.31,0,0,.06,.88,.06,0,.09,0,0,.53,.12,.6,0,.09,.78,.9,.45,.3,.16,0,.25,0,0,.01,.68,.09,.58,.13,0,.93,.25,.45,.91,.45,.02,.01,0,.2,1,.51,.21,.8,.41,.77,.86,.29,.06,.06,.26,0,.87,0,.37,.05,.96,.03,.7,.12,0,.54,.62,.01,.58,.18,.07,.04,.38,0,.03,.13,.44,.23,.56,.61,.49,0,.03,.1,.13,.47,.36,.25,.92,.59,.08,0,.09,.9,0,.81,.16,.18,0,.65,0,.24,.07,.42,.8,.01,.72,.19,.13,0,.01,.01,0,.59,.32,.42,.09,.93,.66,.64,.86,.93,.01,0,.16,.34,.96,.95,.75,.74,0,0,.85,0,.79,.34,0,.89,0,.53,0,.1,.39,.15,.01,.69,.12,0,.27,0,.56,0,.02,.15,.02,.23,.74,.16,.08,.94,.31,0,.81,0,.96,0];export{a as pvalData};
