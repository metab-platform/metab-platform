const a=[.01,.54,.56,.01,.9,0,.84,.83,.49,.13,.47,.35,.14,.17,.8,.3,.37,.43,.27,.15,.12,.1,.35,.83,.91,.52,.25,.61,.35,.63,0,.27,.88,0,.68,.84,.39,.86,.54,.06,.52,.28,.92,.05,.89,.86,.93,.46,.14,.45,.08,.04,.59,.26,.04,.51,.98,0,.67,.73,.08,.4,.2,.91,.63,.44,.26,.91,.5,.59,.27,.84,.2,.11,.18,.81,.29,.11,.58,.63,.82,.72,.73,.1,1,.11,.32,.12,.43,.51,.35,.66,.77,.69,.63,.29,.48,.04,.75,.16,.92,.14,.04,.89,.03,.54,.09,.25,.39,.1,.96,.91,.4,.91,.71,.69,.69,.11,.3,.74,.31,.07,0,.46,.5,.61,.43,.59,.68,.92,.93,.58,.77,.79,.46,.02,.51,.41,.24,.01,.37,0,.38,.49,0,.64,.82,.17,.07,.45,.11,.78,.71,.33,.74,.78,.36,.01,.22,.86,.59,.15,0,.49,.59,.2,.18,.19,.58,.34,0,.43,.98,.57,.77,.3,.79,.31,.24,.44,.66,.84,.9,.66,.06,.03,.03,.2,.17,.76,.97,.92,.14,.13,.2,.7,.13,.28,.06,.15,.88,.62,.95,.26,.55,.4,.24,.45,.13,.05,.51,.99,.97,.75,0,.65,.37,.47,.29,.37,.05,.2,.03,.32,.93,.88,.82,.18,.01,.97,.03,.62,.55,.33,0,0,.87,.08,.58,.05,.46,.88,.87,.41,.45,.23,.25,.2,.71,.88,.64,.21,.17,.7,.4,.1,.01,.2,.33,.64,.11,.55,.34,.48,.46,.05,.69,.33,.47,.05,.24,.05,.61,.59,.71,.61,.49,.06,.74,.24,.5,.69,.94,.84,.03,.74,.21,.65,.04,.33,.2,.75,.61,.16,.99,.9,.53,.04,.86,.4,.44,.83,.77,.81,.32,.45,.61,.05,.31,.12,.77,.83,.25,0,.81,.35,.13,.76,.59,.34,.13,.55,.62,.28,.93,.07,.3,.19,.26,.08,.26,.62,.07,.22,.14,.42,.24,.13,0,.04,.43,.66,.67,.35,.81,.29,.01,.04,.18,.2,.17,.09,.01,.09,.9,.99,.11,.26,.18,.79,.18,.66,.24,.72,.8,.47,.03,.79,.41,.33,.75,.87,.21,.21,.14,.25,.09,.36,.13,.05,.67,.98,.24,.28,.82,.3,.47,.76,.52,.5,.5,0,.72,.04,.01,.88,.05,.62,.4,.21,.49,.04,.42,.17,.45,.95,.91,.37,.13,.05,.53,.15,.76,.41,.03,.01,.34,.85,.36,.01,.06,.28,.51,0,.62,.8,.8,.23,.83,.89,.32,.24,.69,.24,.32,.32,.07,.8,.86,.15,.06,.21,.31,.28,.26,.3,.86,.74,.73,.85,.18,.74,.93,.05,.4,.64,.24,.4,.06,.13,.29,.55,.53,.04,.74,.36,.41,0,.63,.17,.26,.67,.02,.01,.35,.98,.72,.36,.37,.45,.15,.99,.21,.68,1,.21,.7,.09,.73,.3,.14,.48,.72,.23,.49,.92,.86,.08,.68,.32,.26,.3,.26,.08,.16,.7,.29,.38,.68,.37,.13,.02,.25,.14,.94,.92,.56,.17,.02,.46,.43,.95,.39,.19,.02,0,.62,.48,.67,.39,.28,.87,.78,.46,0,0,.04,.05,.84,.31,.07,.63,.01,.74,.31,.81,.01,.99,.23,.33,.34,.88,.88,.18,.9,.38,.42,.4,.35,.79,.56,.7,.4,.76,.43,.98,.37,.1,.53,0,.63,.29,.67,.5,.81,.79,.86,.09,.54,.78,.51,.05,.15,.01,.29,.79,.96,.01,.34,.5,.68,.02,.08,.05,.46,.19,.6,.73,.04,.08,.37,.21,.88,.04,.26,.28,.48,.29,.96,.22,.67,.24,.62,.83,.18,.45,.86,.36,.1,0,.42,.27,.58,.42,.38,.08,.05,.21,.24,.33,.99,.03,0,.04,.16,.33,.84,.41,.92,.55,.21,.31,.1,.27,.79,.18,.81,.14,.25,.23,0,.6,.68,.86,1,.43,1,.86,.7,.55,.96,.71,.43,.2,.88,.08,.47,.07,.37,.51,.4,.82,.76,.47,.01,.96,.18,.45,.3,.84,.74,.33,.48,.13,.22,.74,.73,.24,.52,.75,.43,.22,.63,.1,.01,.54,.25,.04,.33,.63,.08,.58,.84,.55,.5,.95,.53,.45,.16,.28,.63,.66,.67,.29,.63,.87,.83,.17,.97,.09,.85,.27,.31,0,.65,.26,.14,.04,0,.39,.22,.38,.32,.66,.16,.68,.84,.29,.55,.29,.69,.88,.23,.82,.35,.5,.13,.67,.71,.57,0,.51,.59,.2,.3,.31,.42,.91,.08,.07,.72,.12,.92,.54,.3,.88,.2,.06,.6,0,.51,.11,.48,.01,.37,.1,.98,.66,.99,.31,.3,.29,.59,.31,.34,.06,.05,.14,.4,.29,.18,.83,.08,.94,.46,.18,.98,.15,.31,.16,.51,.49,.01,.23,.08,.65,.35,.29,.13,.91,.54,.06,.47,.58,.39,1,.45,.18,.06,.93,0,.06,.54,.13,.03,.66,.36,.09,.61,.45,.63,.93,0,.13,.04,.69,.63,.69,.01,.34,.23,.35,.06,.81,.38,.2,.19,.15,.95,.23,.59,.58,.05,0,.54,.6,.17,.43,.9,.76,.14,.54,.14,.44,.34,.83,.41,0,.78,.68,.76,.3,.74,.29,.39,.17,.57,.33,.57,.01,.46,.77,.01,.16,.37,.7,.05,.87,.52,.12,.14,.02,.01,.15,.17,.26,.98,.24,.52,.84,.39,.73,.37,.44,0,.98,.02,.6,0,.42,0,.82,1,.14,.02,.55,.03,.74,.92,0,.38,0,.52,.33,.68,.93,.01,.91,.61,.33,.96,.45,.7,.24,.49,.45,.04,.57,.02,.51,.01,.59,.8,.62,.21,.79,.39,.55,.04,.96,.3,.65,.15,.15,.6,.81,.48,.45,.26,.93,.48,.11,.16,.39,.03,.37,.79,.11,.02,.8,.01,.21,.77,.27,.15,.65,.7,.54,.95,.42,.63,.7,.22,.49,.08,.22,.98,.02,.01,.04,.54,.63,.45,.2,.93,.52,.22,.71,.4,.2,.1,.51,.55,.12,.02,.33,.01,.14,.06,.17,.53,.34,.75,.46,.71,.26,.42,.73,.3,.46,.26,.27,.42,.27,.21,.56,.48,0,0,.22,.78,.13,.7,.07,.37,.31,.85,.38,.38,.32,.78,1,.53,.47,.22,.29,.08,.09,.56,.95,.44,.38,.97,.78,.11,.77,.12,.63,.5,.79,.23,.03,.01,.89,.58,.04,.37,.42,.27,.73,.06,0,.02,.59,.78,.81,.43,.33,.19,.23,.01,.14,.43,.51,.06,.89,.8,.14,.04,.37,.99,.07,.41,.45,.21,.1,.51,.23,.57,.76,.63,.25,.1,.91,.95,.05,.11,.35,.46,.49,.06,.48,.22,.87,.37,0,.24,.94,.06,.98,.89,.83,.01,.12,.42,.02,.83,.65,.07,.37,.77,.11,.55,.02,.06,.92,.55,.86,0,.57,.78,.24,0,.32,.16,0,.89,.78,.14,.05,.21,.27,0,.44,.03,.11,0,.38,.19,.03,.68,.2,.11,.81,.78,.66,.85,.21,.08,.55,.68,.14,.62,.25,.24,.25,.8,.92,.47,.75,.39,.2,.62,.32,.42,.01,.7,.88,.51,.29,.24,.23,.21,1,.92,.14,.68,.19,.17,.84,.36,.04,.15,.37,.23,.1,.66,.42,.08,.94,.36,.01,.11,.86,.99,.12,.62,.13,.25,.55,.83,.28,.05,0,0,.11,.4,.6,.03,.35,.28,.82,.43,.97,.96,.92,.75,.07,.04,0,.96,.49,.3,.4,0,.81,.01,.95,.73,0,.32,.09,.11,.11,.53,.58,.42,.11,.87,.1,.4,.82,.69,.57,.02,.06,.3,.09,.76,0,.36,.92,.05,.39,.21,.42,.94,.03,.75,.75,.05,.02,.81,.59,.94,0,.78,.77,.42,0,.07,.13,.13,.06,.85,.44,.57,.31,.1,.24,.69,.04,.76,.66,.06,.82,.09,.92,.85,.24,.13,.7,.69,.36,.95,.94,.13,.42,.82,.02,.32,.7,.19,.7,.98,.15,.62,.11,.05,.21,.85,.44,.33,.43,.2,.98,.89,.52,.61,.12,.32,.01,.65,.98,.45,.26,.02,.1,.15,.25,.07,.2,.09,.09,.02,.01,.06,.15,.33,.2,.21,.33,0,.71,.67,.63,.18,.43,.75,.96,.15,.57,.79,.4,.88,.13,.39,.4,.62,.03,.78,.1,.19,.8,.27,.26,.05,.39,.03,.09,.1,.08,.03,.17,.91,.96,.26,.04,.68,.49,.83,.37,.75,.23,.13,.52,.23,.06,.13,.3,.29,.44,0,.5,.78,.96,.03,.7,.35,.3,.91,.2,.3,.33,.4,.83,.64,.3,.28,.8,.4,.63,.23,.32,.39,.36,.59,0,.26,.02,.73,.77,.53,.31,0,.4,.19,.99,.29,.43,.04,.42,.69,.78,.3,.11,.21,.37,.45,.32,.42,.89,.09,.59,.07,.09,.09,.14,.12,.21,.07,.23,.63,.05,.13,.77,.11,.11,.02,.35,.78,.25,.37,.27,.44,.35,.23,.22,.96,.03,.89,.7,.69,.87,.54,.86,.15,.07,.47,.32,.38,.08,.5,.05,.67,.34,.54,.97,.18,.59,.56,.25,.42,.95,.63,.44,.65,.49,.12,.78,.31,.17,.69,.14,.12,.41,.66,0,.67,.22,.23,.06,.3,.79,.22,.96,.15,.27,.38,.96,.57,.22,.43,.17,.34,.34,.62,.07,.46,.41,.6,.57,.13,.14,0,.27,.17,.28,.32,.96,.45,.12,.52,.66,.05,.96,.79,.82,.87,.63,.25,.51,.76,.26,0,.75,.85,.44,.21,.99,.78,.09,.46,.08,.76,.39,.96,.38,.8,.55,.16,.9,.65,.5,.83,.7,.93,1,.39,.85,.17,.01,.11,.3,.3,.2,.39,.72,.39,.64,.85,.29,.23,.93,.88,.61,.14,.22,.59,.12,.35,.09,.81,.01,.71,.75,.04,.62,.5,.15,.53,1,.03,.82,.79,.04,.57,.29,.4,.2,.26,.21,.35,.28,.36,.91,.02,.37,.34,.06,.33,.97,.21,.65,.4,.66,.33,1,.02,.82,.04,.76,.97,.34,.23,.93,.87,.57,.16,.27,.58,.06,.43,.75,.26,.46,.22,.19,.26,.1,.79,.39,.19,.17,.2,.51,.05,.64,.14,.48,.07,.78,.69,.86,.57,.39,.47,.74,.74,.46,.91,1,.97,.1,.86,.04,.37,.67,.12,0,.74,.16,.91,.73,.76,.91,.48,.4,.16,.68,.11,.63,.37,.85,.35,.81,.39,0,.04,.59,.98,.04,.38,.36,.29,.92,.58,.65,.78,.6,0,.96,.35,.06,.39,.93,.46,.98,.34,.15,.31,.12,.41,.11,.38,.48,.05,.26,.49,.37,.31,.44,.52,.49,.49,.5,.23,.17,.03,.04,.26,.9,.92,.76,.58,.59,.13,.64,.66,.92,.91,.67,.17,.11,.05,.57,.02,.22,.67,.03,.65,.69,.21,.19,.04,.54,.26,.37,.37,.18,.08,.24,.19,.37,.34,.8,.03,.32,.42,.52,.12,.3,.7,.95,.42,.01,.09,1,.27,.65,.26,.96,.32,.19,.79,.05,.05,.75,.36,.11,.43,.06,.17,.04,.4,0,0,.82,.18,.32,.4,.69,.17,.71,.36,.68,.4,.43,.11,.35,.95,.36,.31,.29,.76,.37,.23,.19,.49,.56,.35,.35,.11,.6,.09,.08,.63,.06,.42,.69,.2,.15,.67,.36,.15,.41,.02,.03,.79,.51,.17,.62,0,.51,.01,.1,.62,.08,.68,.6,.18,.61,.57,.01,.5,.17,.25,.75,.16,.02,.26,.84,.45,.03,.5,.27,.22,.73,.34,.08,.08,0,.61,.27,.08,.83,.3,.98,.6,.9,.19,.16,.04,.05,.34,0,.34,.07,.08,.72,.25,0,.91,.68,.79,.01,0,.06,.27,.97,.51,.85,.38,.3,.24,.52,.91,.4,.4,.01,.17,.11,.53,.71,.89,.74,.76,.05,.38,.15,.48,.93,.42,.08,.6,.03,.79,0,.33,.59,.02,.04,.01,.09,.84,.19,.43,.16,.26,.61,.28,.68,.31,.26,.95,.48,.77,.02,.69,.39,.85,.41,.08,.4,.57,.55,0,.89,.32,.7,.47,.44,.74,0,.03,.76,.3,.42,.44,.91,.46,.33,.66,.49,.23,.34,.54,.55,.5,.15,.86,.95,.34,.53,.91,.62,.99,.11,.83,.33,.43,.97,0,.83,.54,.47,.05,.03,.45,.16,.05,.13,.47,.24,.47,.01,.83,.31,.28,.43,.06,.01,.49,0,.03,.81,.03,.7,.93,0,.03,.1];export{a as pvalData};
